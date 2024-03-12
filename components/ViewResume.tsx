export default function ProjectCard() {
  return (
    <a href="/files/ManguanAyen-CV.pdf" target="_blank">
      <div className="px-6 py-2 bg-reseda-green justify-center items-center gap-2 flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path
            fill-rule="evenodd"
            d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
            clip-rule="evenodd"
          />
        </svg>

        <p className="font-bagnard text-white">View Resume</p>
      </div>
    </a>
  );
}
