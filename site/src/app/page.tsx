import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Statement } from "@/components/statement";
import { About } from "@/components/about";
import { Expertise } from "@/components/expertise";
import { Projects } from "@/components/projects";
import { Workflow } from "@/components/workflow";
import { Experience } from "@/components/experience";
import { Testimonials } from "@/components/testimonials";
import { Writing } from "@/components/writing";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Statement />
      <About />
      <Expertise />
      <Projects />
      <Workflow />
      <Experience />
      <Testimonials />
      <Writing />
      <Contact />
      <Footer />
    </>
  );
}
