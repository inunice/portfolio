import "@/app/globals.css";

export default async function NavBar() {
  return (
    <div className="bg-eggshell max-w-full h-screen flex flex-col items-center justify-center">
      <p className="text-[70px] font-bagnard text-persian-red mb-10">
        crafting code, weaving stories.
      </p>
      <p className="text-[45px] font-bagnard text-eerie-black">
        hi, i'm <span className="text-reseda-green">ayen</span>!
      </p>
      <p className="max-w-[600px] text-lg text-eerie-black text-center">
        I'm an aspiring full-stack developer with a passion for UI/UX and
        front-end magic! Underneath a project's hundreds of lines of code lies a
        story waiting to be told — let's bring yours to life.
      </p>
    </div>
  );
}
