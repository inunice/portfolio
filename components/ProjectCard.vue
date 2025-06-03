<template>
  <div
    class="bg-[#EEEAD7] shadow-sm rounded-lg w-full max-w-3xl mb-6 flex flex-col justify-between transition-transform duration-200 ease-in-out hover:-translate-y-1"
  >
    <div class="p-6 flex flex-col">
      <h3 class="text-xl font-bold text-persian mb-2">{{ title }}</h3>
      <p class="text-sm mb-1">{{ description }}</p>
    </div>
    <div>
      <div class="flex flex-wrap gap-1 mb-4 px-6">
        <BadgeTechnology
          calss
          v-for="(tech, index) in technologies"
          :key="index"
        >
          {{ tech }}
        </BadgeTechnology>
      </div>
      <div
        class="flex flex-wrap gap-4 mt-2 bg-[#FFDFA0] px-6 py-4 rounded-b-lg"
      >
        <a
          v-if="github"
          :href="github"
          class="text-ocean font-bold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub →
        </a>
        <a
          v-if="live"
          :href="live"
          class="text-ocean font-bold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live →
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import BadgeTechnology from "./ui/BadgeTechnology.vue";

defineProps({
  title: String,
  description: String,
  technologies: Array,
  github: String,
  live: String,
});
</script>
