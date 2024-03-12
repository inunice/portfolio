import "@/app/globals.css";

interface ListComponentProps {
  title: string;
  items: string[];
}

const ListComponent: React.FC<ListComponentProps> = ({ title, items }) => (
  <div className="flex flex-col items-center">
    <p className="text-persian-red text-xl font-bagnard">{title}</p>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default async function NavBar() {
  const languages = [
    "Python",
    "C",
    "Typescript",
    "HTML 5",
    "CSS 3",
    "SQL",
    "Bash",
  ];
  const libraries = ["Next.js", "React.js", "Node.js", "Tailwind CSS"];
  const devtools = ["Git", "PostgreSQL", "MySQL", "WSL", "Playwright"];
  const miscellanous = [
    "Adobe Creative Suite (Ps, Ai, Id, Pr)",
    "Google Workspace",
    "Figma",
    "Canva",
    "Notion",
  ];

  return (
    <div className="bg-eggshell max-w-full h-screen flex flex-col items-center justify-center text-eerie-black">
      <h1>my story in code</h1>
      <p>
        In the constantly evolving field of technology, I find joy in adding new
        tools to my tech stack, bringing fresh perspectives to each project.
        From conceptualizing ideas to implementing solutions, my code tells a
        story of innovation, efficiency, and seamless user experiences.
      </p>
      <h2>Technology Stack</h2>
      <div className="flex flex-row gap-10">
        <ListComponent title="Languages" items={languages} />
        <ListComponent title="Libraries" items={libraries} />
        <ListComponent title="Developer Tools" items={devtools} />
        <ListComponent title="Miscellanous" items={miscellanous} />
      </div>
    </div>
  );
}
