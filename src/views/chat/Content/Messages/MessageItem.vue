<template>
  <div
    :class="[
      'flex',
      {
        [design.me.container]: me,
        [design.other.container]: !me,
      },
    ]"
  >
    <div
      :class="[
        'rounded-lg',
        {
          [design.me.message]: me,
          [design.other.message]: !me,
        },
      ]"
    >
      <span
        :class="[
          '',
          {
            [design.me.text]: me,
            [design.other.text]: !me,
          },
        ]"
        >something</span
      >
    </div>
  </div>
</template>

<script setup>
defineProps({
  me: Boolean,
});

const design = {
  me: {
    container: "items-end justify-end",
    message: "bg-primary p-2",
    text: "text-white",
  },
  other: {
    container: "items-start justift-start",
    message: "bg-white p-2",
    text: "text-black",
  },
};
</script>

<style>
</style>