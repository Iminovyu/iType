import Navbar from "@/components/ui/navbar";
import {Link} from 'react-router-dom'
import { Hero } from "@/components/ui/animated-hero";
import AboutiType from "@/components/feature-section-with-hover-effects";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import {
  Box,
  Lock,
  TrendingUp,
  Layout,
  ShoppingCart,
  Search,
  Gamepad,
  Cog,
  Settings,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { ContactPage } from "@/components/contact-page";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TeamSection from "@/components/Team";
const Home = () => {
    const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
      // Очищаем state после скролла
      window.history.replaceState({}, document.title);
    }
  }, [location]);
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
        <div className="container px-4 mx-auto">
          <div className="mx-auto max-w-fit flex flex-col items-center py-26 pb-8">
            <h1 className="mb-4 text-6xl font-bold tracking-tight md:text-5xl">
              Our Projects
            </h1>
            <p className="mb-6 text-base text-muted-foreground md:text-lg">
              Where Ideas Take Shape
            </p>
          </div>
          <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            <GridItem
              area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
              icon={<TrendingUp className="h-4 w-4" />}
              title="Custom CRM Systems"
              description="Tailored CRM solutions that automate sales funnels and increase conversion rates for your business."
            />
            <GridItem
              area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
              icon={<Layout className="h-4 w-4" />}
              title="High-Converting Landing Pages"
              description="Sales-driven design that captures leads and turns visitors into customers with compelling UI/UX."
            />
            <GridItem
              area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
              icon={<ShoppingCart className="h-4 w-4" />}
              title="E-commerce Platforms"
              description="Scalable online stores with secure payment gateways, inventory management, and seamless user experience."
            />
            <GridItem
              area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
              icon={<Gamepad className="h-4 w-4" />}
              title="Web Games"
              description="Engaging gaming experiences built with modern engines, from concept to deployment and monetization."
            />
            <GridItem
              area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
              icon={<Cog className="h-4 w-4" />}
              title="Full-Cycle Development"
              description="End-to-end project delivery: from MVP to scalable solutions with ongoing support and optimization."
            />
          </ul>
          <div className="flex justify-center pt-12">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-white transition-all hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span>See all projects</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section id="team">
        <TeamSection></TeamSection>
      </section>

      <section id="services">
        <div className="container px-4 mx-auto">
          <div className="mx-auto flex flex-col items-center max-w-fit py-26 pb-8">
            <h1 className="mb-4 text-6xl font-bold tracking-tight md:text-5xl">
              Our Services
            </h1>
            <p className="mb-6 text-base text-muted-foreground md:text-lg">
              And let us tell about our services!
            </p>
          </div>
          <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            <GridItem
              area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
              icon={<Box className="h-4 w-4" />}
              title="CRM out-of-the-box"
              description="We build and deploy CRM systems that save time and boost sales."
            />
            <GridItem
              area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
              icon={<Settings className="h-4 w-4" />}
              title="Sales-driven design"
              description="UI/UX, branding and identity — beautiful and human-friendly."
            />
            <GridItem
              area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
              icon={<Lock className="h-4 w-4" />}
              title="Clean code only"
              description="Modern stack: Next.js, React, Nest, TypeScript — no legacy hacks."
            />
            <GridItem
              area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
              icon={<Sparkles className="h-4 w-4" />}
              title="Launch in 4 weeks"
              description="From idea to first user — fast, transparent and zero bureaucracy."
            />
            <GridItem
              area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
              icon={<Search className="h-4 w-4" />}
              title="24/7 support"
              description="We stay after launch: SLA, updates, hot-fixes and consultations."
            />
          </ul>
        </div>
      </section>

      <section id="contact" className="">
        <ContactPage></ContactPage>
      </section>
    </div>
  );
};
interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className=" relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default Home;
