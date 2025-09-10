import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Resume from "./resume/page";
import Work from "./work/page";
import Contact from "./contact/page";

const Home = () => {
  return (
    <>
      <section id="home" className="h-1/4 pb-40">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <h1 className="h1 mb-6">
                Hello, I am <br /> <span className="text-accent">Maria Malato</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I&apos;m a curious and motivated person with a strong passion for software development, which I discovered early on. I love learning new things and staying busy with projects that challenge me.
              </p>
              {/* btn and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <a href="/CV.pdf" download="CV.pdf">
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2"
                  >
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </a>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            {/* photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>

      <section id="resume" className="pb-30">
        <Resume />
      </section>

      <section id="work" className="pb-30">
        <Work />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
