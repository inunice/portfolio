<template>
  <section class="min-h-screen max-w-4xl mx-auto px-4">
    <div
      class="flex flex-col items-center justify-center text-center mb-10 gap-0"
    >
      <div class="flex flex-row justify-center gap-3">
        <div
          class="w-10 h-10 rounded-lg flex items-center justify-center shadow-inner bg-ocean"
        >
          <Icon name="lucide:hammer" class="text-white text-2xl" />
        </div>
        <h2 class="text-4xl font-bold mb-4 font-display">Skills</h2>
      </div>
      <text class="max-w-2xl text-md">
        Here’s a little shelf of tools I’ve picked up along the way! Whether
        coding, designing, or debugging, these are the skills that help me build
        things with heart.
      </text>
    </div>

    <div class="grid gap-8 md:grid-cols-4 mx-auto max-w-fit">
      <SkillsCard
        v-for="(skill, index) in skills"
        :key="index"
        v-bind="skill"
      />
    </div>
  </section>
</template>

<script setup>
import SkillsCard from "./SkillsCard.vue";

const skills = [
  {
    index: 0,
    title: "Programming Languages",
    icon: "ph:code-bold",
    entries: ["JavaScript", "TypeScript", "Python", "C", "SQL", "HTML", "CSS"],
  },
  {
    index: 1,
    title: "Libraries & Frameworks",
    icon: "tabler:stack-2",
    entries: [
      "React (Next.js, React Native, Expo)",
      "Angular",
      "Tailwind CSS",
      "Django",
      "Streamlit",
    ],
  },
  {
    index: 2,
    title: "Technologies",
    icon: "material-symbols:settings-outline",
    entries: [
      "Git",
      "MySQL",
      "PostgreSQL",
      "Docker",
      "Firebase",
      "Supabase",
      "AWS Lambda",
      "Datadog",
      "Playwright",
      "Jest",
    ],
  },
  {
    index: 3,
    title: "Design",
    icon: "mdi:palette",
    entries: ["Figma", "Adobe Creative Suite (Ps, Ai, Id, Pr)", "Canva"],
  },
];
</script>
