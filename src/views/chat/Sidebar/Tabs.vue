<template>
  <ul class="flex items-center justify-between m-5 bg-white">
    <li
      @click="currentTab = i"
      v-for="(tab, i) in tabs"
      :key="i"
      :class="[
        'flex cursor-pointer items-center justify-center h-12 flex-1 w-full',
        {
          [getActiveClasses]: currentTab == i,
        },
      ]"
    >
      {{ tab }}
    </li>
  </ul>
</template>

<script setup>
import { computed, ref } from "vue";

const currentTab = ref(0);
const tabs = ["Favourites", "Friends", "Groups"];

const getActiveClasses = computed({
  get() {
    return "bg-primary text-white";
  },
});
</script>

<style>
</style>