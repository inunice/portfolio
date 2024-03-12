import "@/app/globals.css";

interface ListComponentProps {
  title: string;
  items: string[];
}

const ListComponent: React.FC<ListComponentProps> = ({ title, items }) => (
  <div className="flex flex-col">
    <span className="text-persian-red text-lg font-bagnard mb-1">{title}</span>
    <ul>
      {items.map((item, index) => (
        <li className="text-sm max-w-[150px]" key={index}>
          {item}
        </li>
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
    <div className="bg-eggshell max-w-full px-[30px] py-[50px] flex flex-col items-center justify-center text-eerie-black">
      <h1>my story in code</h1>
      <p className="max-w-[65vh] text-center mb-10">
        In the constantly evolving field of technology, I find joy in adding new
        tools to my tech stack, bringing fresh perspectives to each project.
        From conceptualizing ideas to implementing solutions, my code tells a
        story of innovation, efficiency, and seamless user experiences.
      </p>
      <h2>Technology Stack</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-1">
        <ListComponent title="Languages" items={languages} />
        <ListComponent title="Libraries" items={libraries} />
        <ListComponent title="Dev Tools" items={devtools} />
        <ListComponent title="Miscellanous" items={miscellanous} />
      </div>
    </div>
  );
}
