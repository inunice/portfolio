<script setup>
import { projects } from "@/data/content.js";
</script>

<template>
  <section class="max-w-4xl mx-auto px-4">
    <UiSectionTitle
      title="Projects"
      description="Take a peek into my project nook! From coursework to side projects, here’s a collection of things I’ve crafted with care."
    />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        v-bind="project"
      />
    </div>
  </section>
</template>
