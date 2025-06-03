<script setup>
import { skills } from "@/data/skills.ts";
</script>

<template>
  <section class="max-w-4xl mx-auto px-4">
    <UiSectionTitle
      :index="1"
      title="Skills"
      description="Here’s a little shelf of tools I’ve picked up along the way! Whether coding, designing, or debugging, these are the skills that help me build things with heart."
      icon="lucide:hammer"
    />

    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mx-auto max-w-fit">
      <SkillsCard
        v-for="(skill, index) in skills"
        :key="index"
        v-bind="skill"
      />
    </div>
  </section>
</template>
