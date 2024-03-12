import Image from "next/image";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Header />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
