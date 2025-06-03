<template>
  <div class="flex flex-col gap-2">
    <div class="flex flex-col gap-2 mb-1">
      <div
        :class="[
          'w-8 h-8 rounded-lg flex items-center justify-center shadow-inner',
          iconBgColor,
        ]"
      >
        <Icon :name="icon" :class="['text-lg', iconTextColor]" />
      </div>
      <h3 class="text-md font-bold leading-tight">{{ title }}</h3>
    </div>
    <ul class="text-sm text-brown-800 list-none space-y-1">
      <li v-for="(entry, j) in entries" :key="j">{{ entry }}</li>
    </ul>
  </div>
</template>

<script setup>
import { useIconColors } from "@/composables/useIconColors";

const props = defineProps({
  index: Number,
  icon: String,
  title: String,
  entries: Array,
});

const { iconBgColor, iconTextColor } = useIconColors(props.index);
</script>
