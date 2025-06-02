<template>
  <div class="flex gap-6 items-start py-4">
    <img :src="avatar" alt="Company Logo" class="w-12 h-12 rounded-full object-cover" />
    <div>
      <h3 class="text-lg font-semibold text-gray-900">{{ company }}</h3>
      <p class="text-sm text-gray-600">{{ role }} | {{ dateRange }}</p>
      <p class="text-sm text-gray-500 italic">{{ location }}</p>
      <p class="text-sm text-gray-500 mb-2">{{ tech }}</p>
      <ul class="list-disc list-inside text-sm text-gray-700">
        <li v-for="(item, index) in responsibilities" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  avatar: String,
  company: String,
  role: String,
  dateRange: String,
  location: String,
  tech: String,
  responsibilities: Array
});
</script>
