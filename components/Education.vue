<template>
  <section class="education px-6 py-10">
    <h2 class="text-2xl font-bold mb-6 text-tea">📘 Education</h2>
    <div class="space-y-4">
      <EducationItem
        v-for="(item, index) in education"
        :key="index"
        :school="item.school"
        :dates="item.dates"
        :location="item.location"
        :degree="item.degree"
        :bullets="item.bullets"
      />
    </div>
  </section>
</template>

<script setup>
import EducationItem from './EducationItem.vue'

const education = [
  {
    school: 'University of the Philippines Diliman',
    dates: 'September 2021 - July 2025',
    location: 'Quezon City',
    degree: 'Bachelor of Science in Computer Science',
    bullets: [
      'Summa Cum Laude Standing (Current GWA: 1.08; Highest: 1.00, Lowest: 5.00)',
      'DOST-SEI Undergraduate Merit Scholarship',
      'Member, Service Science and Software Engineering (S3) Laboratory'
    ]
  },
  {
    school: 'Philippine Science High School - Central Luzon Campus',
    dates: 'July 2015 - May 2021',
    location: 'Clark Freeport Zone',
    degree: 'Graduated with Highest Honors',
    bullets: [
      'Academic Proficiency in Computer Science and in Arts, Drafting & Technology'
    ]
  }
]
</script>

