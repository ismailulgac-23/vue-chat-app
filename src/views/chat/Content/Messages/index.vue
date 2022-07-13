<template>
  <div class="p-10" style="flex: 0.8">
    <div class="w-full h-full overflow-auto flex flex-col gap-3">
      <message-item :me="true" />
      <message-item :me="false" />
      <message-item :me="false" />
      <message-item :me="true" />
    </div>
  </div>
</template>

<script setup>
import MessageItem from "./MessageItem.vue";
</script>

<style>
</style>