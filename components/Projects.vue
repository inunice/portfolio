<template>
  <section class="min-h-screen max-w-4xl mx-auto px-4">
    <div
      class="flex flex-col items-center justify-center text-center mb-10 gap-0"
    >
      <div class="flex flex-row justify-center gap-3">
        <div
          class="w-10 h-10 rounded-lg flex items-center justify-center shadow-inner bg-coral"
        >
          <Icon name="lucide-lab:floppy-disk-2" class="text-white text-2xl" />
        </div>
        <h2 class="text-4xl font-bold mb-4 font-display">Projects</h2>
      </div>
      <text class="max-w-2xl text-md">
        Take a peek into my project nook! From coursework to side projects,
        here’s a collection of things I’ve crafted with care.
      </text>
    </div>

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
    index: 0,
    title: "Lakbayan",
    icon: "carbon:choropleth-map",
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
    index: 1,
    title: "TeddyCare",
    icon: "carbon:user-favorite",
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
    index: 2,
    title: "koodo",
    icon: "carbon:notebook-reference",
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
