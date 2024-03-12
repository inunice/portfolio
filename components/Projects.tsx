import "@/app/globals.css";
import ProjectCard from "@/components/ui/ProjectCard";

export default async function NavBar() {
  return (
    <div className="bg-bistre max-w-full px-[30px] py-[80px] flex flex-col items-center justify-center text-eggshell">
      <h1 className="text-center">why do stories matter?</h1>
      <p className="max-w-[65vh] text-center mb-5">
        I've always had a knack and deep appreciation for all forms of
        storytelling; of how they unconsciously touch the lives of those who
        come across it. But stories don't just live in adventure novels or
        musical notes.
      </p>
      <p className="max-w-[65vh] text-center mb-10">
        With every click, there's a well-thought-out tale, a connection waiting
        to be made. My journey, being both a layout artist and a computer
        science student, shapes my perspective on weaving compelling narratives
        in the realm of development.
      </p>
      <h2 className="">Projects</h2>
      <div className="flex flex-row gap-5">
        <ProjectCard
          title="Automated Inventory Management System"
          techStack={[
            "NextJS",
            "ReactJS",
            "Typescript",
            "TailwindCSS",
            "Supabase",
          ]}
          description="Dynamic inventory system for small-scale sari-sari stores, including expiring stocks and top sales"
          links={[
            { name: "Repository", url: "https://github.com/NeoGregorio/AIMS" },
            { name: "Live", url: "https://aims-omega.vercel.app/" },
          ]}
        />
        <ProjectCard
          title="LAMOC: Mosquito Observation Channel"
          techStack={["Python", "HTML", "CSS", "PHP", "MySQL"]}
          description="Award-winning high school research on a deployable mosquito monitoring device and web app"
          links={[
            { name: "Manuscript", url: "/files/LAMOC-Manuscript.pdf" },
            { name: "Slides", url: "/files/LAMOC-Slides.pdf" },
          ]}
        />
      </div>
    </div>
  );
}
