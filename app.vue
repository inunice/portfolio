<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'
</script>

<template>
  <Analytics />
  <Header />
  <div class="flex flex-col gap-30 mb-30">
    <Projects />
    <Skills />
    <Contact />
  </div>
</template>
