<script lang="ts" setup>
import { computed } from "vue";

const { index, title, icon, description } = defineProps<{
  index: number;
  title: string;
  icon: string;
  description: string;
}>();

const bgColor = computed(() => {
  const colors = ["bg-coral", "bg-tea", "bg-ocean"];
  return colors[index % colors.length];
});
</script>

<template>
  <div
    class="flex flex-col items-center justify-center text-center mb-10 gap-0"
  >
    <div class="flex flex-row justify-center gap-3">
      <div
        :class="[
          'w-10 h-10 rounded-lg flex items-center justify-center shadow-inner',
          bgColor,
        ]"
      >
        <Icon :name="icon" class="text-white text-2xl" />
      </div>
      <h2 class="text-4xl font-bold mb-4 font-display">{{ title }}</h2>
    </div>
    <p class="max-w-2xl text-md">
      {{ description }}
    </p>
  </div>
</template>
