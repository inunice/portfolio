import Image from "next/image";
import { Open_Sans } from "@next/font/google";
import Bagnard from "@next/font/local";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-openSans" });
const bagnard = Bagnard({
  src: "../public/fonts/Bagnard.woff2",
  variable: "--font-bagnard",
});

export default function Home() {
  return (
    <main className={`${openSans.variable} font-sans ${bagnard.variable}`}>
      <div className="w-full">
        <Navbar />
        <Header />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </main>
  );
}
