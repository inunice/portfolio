import "@/app/globals.css";

export default async function NavBar() {
  return (
    <div className="bg-eggshell w-screen h-screen flex flex-col items-center justify-center">
      <p className="text-[70px] font-bagnard text-persian-red">
        crafting code, weaving stories.
      </p>
      <p className="text-[30px] font-bagnard text-reseda-green">
        hi, i'm ayen!
      </p>
      <p className="max-w-[600px] text-lg text-eerie-black text-center">
        I'm an aspiring full-stack developer with a passion for UI/UX and
        front-end magic! Underneath a project's hundreds of lines of code lies a
        story waiting to be told — let's bring yours to life.
      </p>
    </div>
  );
}
