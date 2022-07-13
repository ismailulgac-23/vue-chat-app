<template>
  <div style="flex: 0.8" class="w-full h-full flex flex-col bg-gray-200">
    <!-- <no-messages /> -->
    <Header />
    <Messages />
    <Footer />
  </div>
</template>

<script setup>
import NoMessages from "./NoMessages.vue";
import Header from "./Header.vue";
import Messages from "./Messages";
import Footer from "./Footer.vue";
</script>

<style>
</style>