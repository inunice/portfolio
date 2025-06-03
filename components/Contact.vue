<template>
  <section class="max-w-4xl mx-auto px-4">
    <UiSectionTitle
      :index="2"
      title="Contact"
      description="Whether you have a project in mind, a story to share, or simply want to
        connect — I’d love to hear from you. Let’s build something meaningful
        together!"
      icon="lucide:phone-call"
    />
    <div class="flex flex-col items-center justify-center text-center gap-5">
      <ul
        class="flex gap-6 flex-wrap justify-center text-ocean text-sm underline underline-offset-4 decoration-persian"
      >
        <li class="flex items-center gap-2">
          <Icon name="lucide:mail" class="text-xl" />
          <a href="mailto:ayenmanguan@gmail.com" target="_blank"
            >ayenmanguan@gmail.com</a
          >
        </li>
        <li class="flex items-center gap-2">
          <Icon name="lucide:github" class="text-xl" />
          <a href="https://github.com/inunice" target="_blank"
            >github.com/inunice</a
          >
        </li>
        <li class="flex items-center gap-2">
          <Icon name="lucide:linkedin" class="text-xl" />
          <a href="https://www.linkedin.com/in/inunice" target="_blank"
            >linkedin.com/in/inunice</a
          >
        </li>
      </ul>

      <a
        href="https://drive.google.com/file/d/1KIGywMl5T4MwQCyhQ7YRAQ8oEiyBxZZV/view?usp=sharing"
        target="_blank"
        class="mt-4 inline-block bg-coral text-white font-semibold px-5 py-2 rounded-md shadow hover:bg-amber transition-colors"
      >
        View Resume
      </a>
    </div>
  </section>
</template>
