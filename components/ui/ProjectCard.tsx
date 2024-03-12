export default async function ProjectCard({
  title,
  techStack,
  description,
  links,
}: {
  title: string;
  techStack: string[];
  description: string;
  links: { name: string; url: string }[];
}) {
  return (
    <div className="border p-6 rounded-md bg-eggshell max-w-[280px] transform transition-all duration-200 hover:-translate-y-2">
      <p className="text-eerie-black font-bagnard text-xl leading-none mb-2">
        {title}
      </p>
      <ul className="flex gap-2 mb-4 flex-wrap gap-y-1">
        {techStack.map((tech, index) => (
          <li
            className="bg-reseda-green px-2 rounded-sm text-[12px]"
            key={index}
          >
            {tech}
          </li>
        ))}
      </ul>
      <p className="mb-4 text-eerie-black text-[14px]">{description}</p>
      <ul className="flex gap-3 text-[13px] underline underline-offset-4 text-eerie-black decoration-reseda-green opacity-90">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
