import Navbar from "@/components/ui/navbar";
import { Hero } from "@/components/ui/animated-hero"
import AboutiType  from "@/components/feature-section-with-hover-effects"
import ProjectsTimeLine  from "@/components/release-time-line"
import { FlickeringGrid } from "@/components/ui/flickering-grid";
const Home = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="relative h-screen rounded-lg w-full bg-background overflow-hidden ">
      <Hero />
      <FlickeringGrid
        className="z-[0] absolute inset-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#AECEFB"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
     
    </div>

      <section id="about" className="">
        <AboutiType></AboutiType>
      </section>

      <section id="projects" className="">
        <ProjectsTimeLine></ProjectsTimeLine>
      </section>

      <section id="services" className="">
        <h1>Services</h1>
      </section>

      <section id="contact" className="">
        <h1>Contact</h1>
      </section>
    </div>
  );
};
export default Home;
