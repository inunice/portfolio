<template>
  <div class="flex gap-6 items-start py-4">
    <div>
      <h3 class="text-lg font-semibold text-gray-900">{{ school }}</h3>
      <p class="text-sm text-gray-600">{{ degree }}</p>
      <p class="text-sm text-gray-500 italic">{{ dates }} • {{ location }}</p>
      <ul class="list-disc list-inside mt-2 text-sm text-gray-700">
        <li v-for="(item, index) in bullets" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  school: String,
  degree: String,
  dates: String,
  location: String,
  bullets: Array,
});
</script>
