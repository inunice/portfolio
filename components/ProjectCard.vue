<script setup>
import { useIconColors } from "@/composables/useIconColors";
import { computed } from "vue";

import teddycare from "@/assets/projects/teddycare.png";
import povertyparenting from "@/assets/projects/povertyparenting.png";
import lakbayan from "@/assets/projects/lakbayan.png";

const props = defineProps({
  index: Number,
  title: String,
  icon: String,
  photo: String,
  description: String,
  technologies: Array,
  github: String,
  live: String,
});

const { iconBgColor, iconTextColor } = useIconColors(props.index);

const photoMap = {
  teddycare,
  povertyparenting,
  lakbayan,
};

const photoUrl = computed(() => photoMap[props.photo] || "");
</script>

<template>
  <div
    class="bg-[#EEEAD7] shadow-sm rounded-lg w-full max-w-3xl flex flex-col justify-between transition-transform duration-200 ease-in-out hover:-translate-y-1"
  >
    <div v-if="photo" class="flex justify-center">
      <img
        :src="photoUrl"
        alt="Project screenshot"
        class="w-full h-auto rounded-t-lg object-cover"
      />
    </div>

    <div class="p-6 flex flex-col">
      <div class="flex flex-row gap-2 mb-3">
        <div
          :class="[
            'w-7 h-7 rounded-lg flex items-center justify-center shadow-inner',
            iconBgColor,
          ]"
        >
          <Icon :name="icon" :class="['text-lg', iconTextColor]" />
        </div>
        <h3 class="text-xl font-bold">{{ title }}</h3>
      </div>
      <p class="text-sm mb-1">{{ description }}</p>
    </div>

    <div>
      <div class="flex flex-wrap gap-1 mb-4 px-6">
        <UiBadgeTechnology v-for="(tech, index) in technologies" :key="index">
          {{ tech }}
        </UiBadgeTechnology>
      </div>

      <div
        class="flex flex-wrap gap-4 mt-2 bg-[#FFDFA0] px-6 py-4 rounded-b-lg"
      >
        <a
          v-if="github"
          :href="github"
          class="inline-flex items-center gap-1 text-ocean font-bold hover:underline text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="grommet-icons:github" />
          Repository
        </a>

        <a
          v-if="live"
          :href="live"
          class="inline-flex items-center gap-1 text-ocean font-bold hover:underline text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="lucide:external-link" />
          Live
        </a>
      </div>
    </div>
  </div>
</template>
