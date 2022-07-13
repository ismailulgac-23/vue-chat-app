<template>
  <div class="w-screen h-screen bg-gray-200 flex items-center justify-center">
    <div class="w-full max-w-sm bg-white rounded-3xl">
      <div class="bg-primary py-5 rounded-3xl flex items-center justify-center">
        <logo appendTitle="Register" />
      </div>
      <div class="px-4 py-5 flex flex-col gap-2">
        <input
          type="text"
          placeholder="Full Name"
          class="
            w-full
            outline-none
            border-2 border-gray-200
            p-2
            rounded-lg
            text-sm
            focus:border-primary focus:placeholder-primary
          "
        />
        <input
          type="text"
          placeholder="Username"
          class="
            w-full
            outline-none
            border-2 border-gray-200
            p-2
            rounded-lg
            text-sm
            focus:border-primary focus:placeholder-primary
          "
        />
        <input
          type="password"
          placeholder="Password"
          class="
            w-full
            outline-none
            border-2 border-gray-200
            p-2
            rounded-lg
            text-sm
            focus:border-primary focus:placeholder-primary
          "
        />
        <input
          type="button"
          value="Register"
          class="
            w-full
            outline-none
            p-2
            text-white
            cursor-pointer
            font-medium
            rounded-lg
            text-sm
            bg-primary
          "
        />
        <router-link to="/">
          <input
            type="button"
            value="Login"
            class="
              w-full
              outline-none
              p-2
              cursor-pointer
              rounded-lg
              bg-white
              text-sm
              border-2
              font-medium
              border-primary
              text-primary
            "
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import Logo from "@/components/shared/Logo.vue";
</script>

<style>
</style>