<template>
  <div
    @click="selected = true"
    :class="[
      'p-3 flex cursor-pointer select-none justify-between',
      {
        [getSelectedClasses]: selected,
      },
    ]"
  >
    <div class="flex items-center justify-center gap-3">
      <img src="/logo.png" class="object-cover w-12 h-12 rounded-full" />
      <div class="flex flex-col gap-1">
        <h1 class="font-medium">Code Fisher</h1>
        <span class="text-xs text-[#09132C]">Hahah o man!</span>
      </div>
    </div>
    <span
      :class="[
        'text-sm',
        {
          'text-gray-400': !selected,
          'text-white': selected,
        },
      ]"
      >05:14 pm</span
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
const selected = ref(false);
const getSelectedClasses = "bg-primary text-white";
</script>

<style>
</style>