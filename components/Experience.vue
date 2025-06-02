<template>
  <section class="work-experience px-6 py-10">
    <h2 class="text-2xl font-bold mb-6">Work Experience</h2>
    <div class="space-y-4">
      <ExperienceItem
        v-for="(item, index) in experiences"
        :key="index"
        :company="item.company"
        :role="item.role"
        :dates="item.dates"
        :location="item.location"
        :technologies="item.technologies"
        :bullets="item.bullets"
        :avatar="item.avatar"
      />
    </div>
  </section>
</template>

<script setup>
import ExperienceItem from './ExperienceItem.vue'

const experiences = [
  {
    company: 'Enstack Technologies Inc.',
    role: 'Engineering Intern',
    dates: 'June – August 2024',
    location: 'Bonifacio Global City, Taguig (Onsite)',
    technologies: 'TypeScript, Angular, Ionic, Python, Django, AWS, PostgreSQL, Datadog',
    avatar: 'https://media.licdn.com/dms/image/v2/C4D0BAQHUxRXAjBJUVg/company-logo_200_200/company-logo_200_200/0/1646617553445/enstack_logo?e=1754524800&v=beta&t=z8K9ZSH5NYMokUbt1AglZWiC-lwO3XuRjl0pO4zDYJ0',
    bullets: [
      'Translated redesigned UI mockups into functional components for income and expense reporting during a major mobile app rebranding',
      'Enhanced the application’s user experience (UX) by adding skeletonizers during the rebranding process',
      'Implemented UI/UX enhancements and refactored pages and components, streamlining the codebase',
      'Automated updates to shipping information using Python scripts, improving operational efficiency',
      'Identified and addressed bugs through detailed log and backend analysis, resolving 3–4 tickets per week'
    ]
  }
]
</script>

