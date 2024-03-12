import "@/app/globals.css";

export default async function NavBar() {
  return (
    <div className="bg-eggshell max-w-full h-screen px-[30px] py-[80px] flex flex-row items-center justify-center gap-20 flex-wrap">
      <p className="max-w-[70vh] text-[70px] font-bagnard text-persian-red text-right leading-none">
        crafting code, weaving stories.
      </p>
      <div>
        <p className="text-[45px] font-bagnard text-eerie-black">
          hi, i'm <span className="text-reseda-green">ayen</span>!
        </p>
        <p className="max-w-[70vh] text-lg text-eerie-black">
          I'm an aspiring full-stack developer with a passion for UI/UX and
          front-end magic! Underneath a project's hundreds of lines of code lies
          a story waiting to be told — let's bring yours to life.
        </p>
      </div>
    </div>
  );
}
