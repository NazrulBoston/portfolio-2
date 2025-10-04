import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Stats } from "@/components/Stats";


export default function Home() {
  return (
  <div>
     <Navbar></Navbar>
     <Hero></Hero>
     <About></About>
     <Services></Services>
     <Stats></Stats>
     <Projects></Projects>
     <Education></Education>
     <Skills></Skills>
     <Contact></Contact>
     <Footer></Footer>
  </div>
   
  );
}
