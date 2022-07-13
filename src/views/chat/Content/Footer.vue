<template>
  <div style="flex: 0.1" class="flex bg-white w-full shadow-md">
    <input
      type="text"
      class="
        outline-none
        focus:border-primary
        border border-transparent
        w-full
        h-full
        px-4
      "
      placeholder="Message"
    />
    <button class="px-12 bg-primary text-white hover:opacity-70 transition-all">
      <svg-icon :path="mdiSend" type="mdi" :size="32"></svg-icon>
    </button>
  </div>
</template>

<script setup>
import { mdiSend } from "@mdi/js";
</script>

<style>
</style>