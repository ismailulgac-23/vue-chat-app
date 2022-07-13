<template>
  <div
    style="flex: 0.2"
    class="w-full h-auto overflow-y-auto overflow-x-hidden bg-gray-100 hide-scrollbar"
  >
    <Header />
    <tabs />
    <chat-list />
  </div>
</template>

<script setup>
import { mdiChevronDown, mdiMagnify } from "@mdi/js";
import Header from "./Header.vue";
import Tabs from "./Tabs.vue";
import ChatList from "./ChatList";
</script>

<style>
</style>