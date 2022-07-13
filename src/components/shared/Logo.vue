<template>
  <div class="flex items-center gap-2">
    <svg-icon :path="mdiMessage" type="mdi" :size="30" color="white"></svg-icon>
    <h1 class="text-white text-xl">WhatsApp - {{ appendTitle }}</h1>
  </div>
</template>

<script setup>
import { mdiMessage } from "@mdi/js";
defineProps({
  appendTitle: String,
});
</script>

<style>
</style>