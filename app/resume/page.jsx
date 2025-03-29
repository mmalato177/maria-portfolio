"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaJava,
  FaFigma,
  FaPython,
  FaVuejs,
  FaPhp,
  FaMicrosoft 
} from "react-icons/fa";

import { SiTailwindcss, SiBlazor, SiFlutter, SiMysql,SiAngular, SiNodedotjs   } from "react-icons/si";


// about data
const about = {
  title: "About me",
  description:
    "I'm a curious and motivated person with a strong passion for software development, which I discovered early on. I love learning new things and staying busy with projects that challenge me. I consider myself an organized person, a bit of a perfectionist, and always looking to improve. My curiosity and drive keep me constantly exploring and growing.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Maria Malato",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+351) 919 185 606",
    },
    {
      fieldName: "Experience",
      fieldValue: "Internships",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Portuguese",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Portuguese,English, German",
    },
    {
      fieldName: "Email",
      fieldValue: "mariamalato2004@gmail.com",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "My experience has been built entirely through internships, providing hands-on learning in real-world environments.",
  items: [
    {
      company: "SINMETRO",
      position: "Full Stack Developer Intern",
      duration: "Mar 2025 - Present",
    },
    {
      company: "SINMETRO",
      position: "Front-End Developer Intern",
      duration: "Summer 2024",
    },
    {
      company: "Advance - Coding Experts",
      position: "Software Developer Intern",
      duration: "Summer 2023",
    },
    {
      company: "TJ Moldes",
      position: "Hardware Assistant Intern",
      duration: "Summer 2022",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I have gained strong theoretical and practical knowledge in computer science,with  a  focus  on  software  development.  Through  academic  projects  I have  developed  problem-solving  skills,  effective  teamwork,  and  theability to adapt to different technologies and frameworks.",
  items: [
    {
      institution: "ESTG - Polytechnic Institute of Leiria",
      degree: "Bachelor's Degree in Computer Science",
      duration: "2022-Current",
    },
    {
      institution: "TVZ - Zagreb University of Applied Sciences",
      degree: "Erasmus+ Exchange Program - Informatics",
      duration: "Oct 2024 - Feb 2025",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaVuejs />,
      name: "vue.js",
    },    
    {
      icon: <SiAngular />,
      name: "angular",
    },
    {
      icon: <SiNodedotjs />,
      name: "node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaJava />,
      name: "java",
    },  
    {
      icon: <SiBlazor />,
      name: "blazor",
    },
    {
      icon: <FaPhp />,
      name: "php",
    },
    {
      icon: <FaMicrosoft />,
      name: "c#",
    },
    {
      icon: <SiFlutter />,
      name: "flutter",
    },
    {
      icon: <SiMysql />,
      name: "My SQL",
    },


  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
