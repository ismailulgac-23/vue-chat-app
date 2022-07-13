<template>
  <div class="flex items-center justify-between p-5">
    <img
      src="/logo.png"
      class="w-10 h-10 cursor-pointer rounded-full object-cover"
    />
    <svg-icon
      type="mdi"
      color="#130F26"
      :path="mdiChevronDown"
      :size="32"
      class="cursor-pointer"
    ></svg-icon>
  </div>
</template>

<script setup>
import { mdiChevronDown } from "@mdi/js";
</script>

<style>
</style>