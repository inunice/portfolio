<template>
  <section class="max-w-4xl mx-auto px-4">
    <h2 class="text-4xl font-bold text-coral mb-4 font-display">Projects</h2>
    <p class="text-lg text-eerie-black max-w-xl mx-auto mb-12">
      Fun projects I've worked on!
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        v-bind="project"
      />
    </div>
  </section>
</template>

<script setup>
import ProjectCard from "./ProjectCard.vue";

const projects = [
  {
    title: "Lakbayan",
    description:
      "Crowdsourced real-time transportation mobile application for wayfinding for the Filipino commuter. Presented in the 25th Philippine Computing Science Congress in Baguio City.",
    technologies: [
      "TypeScript",
      "React Native (Expo)",
      "Supabase (Edge Functions)",
      "Mapbox",
      "PostgreSQL",
    ],
    github: "https://github.com/violessi/lakbayan",
  },
  {
    title: "TeddyCare",
    description:
      "Smart baby monitor connected using IoT for emotionally connecting working parents with their babies, featuring remotely triggered heartbeat recording, simulated playback, and lullaby audio. Won 4th Place in the IoT Cup 2024: Finding Innovations in Smart Home Technologies",
    technologies: [
      "Arduino",
      "ESP32",
      "Internet of Things",
      "Firebase (Cloud Functions)",
      "React (NextJS)",
    ],
    github: "https://github.com/inunice/teddycare",
  },
  {
    title: "koodo",
    description:
      "Local-first fanfiction tracker (web app) and metadata scraper (browser extension) for self-published works",
    technologies: [
      "TypeScript",
      "React (NextJS)",
      "Supabase",
      "PostgreSQL",
      "Dexie",
    ],
    github: "https://github.com/inunice/koodo",
    live: "https://koodowo.vercel.app/",
  },
];
</script>
