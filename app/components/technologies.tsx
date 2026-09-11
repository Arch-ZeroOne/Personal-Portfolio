import React, { ReactNode } from "react";

import { JetBrains_Mono } from "next/font/google";
import {
  AppWindow,
  RobotArm,
  TabletSmartphone,
  ChevronsLeftRightEllipsis,
  type LucideIcon,
} from "lucide-react";
const dopio_one = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
});

const skills = [
  {
    skill: "FullStack Development",
    content:
      "I can create fullstack applications that match the needs of a business, from building responsive interfaces to developing backend services, databases, and APIs. I can also integrate features that help automate repetitive tasks and improve workflows.",
    icon: <AppWindow size={50} />,
  },

  {
    skill: "IoT + Mobile Dashboard",
    content:
      "Even as a beginner, I can create IoT solutions that collect data from sensors and present it through a mobile dashboard. I can combine IoT data with basic analytics to help users monitor systems and understand real-world conditions.",
    icon: <RobotArm size={50} />,
  },

  {
    skill: "Mobile Development",
    content:
      "I can develop functional mobile applications using modern frameworks, focusing on clean interfaces, practical features, API integration, and data management. I can also work with existing mobile codebases and integrate services such as Firebase.",
    icon: <TabletSmartphone size={50} />,
  },

  // {
  //   skill: "Console-Based Java Applications",
  //   content:
  //     "I can develop console-based Java applications for solving problems, processing data, managing records, and automating simple workflows. These projects also help demonstrate my understanding of programming fundamentals, object-oriented programming, and application logic.",
  //   icon: <ChevronsLeftRightEllipsis size={50} />,
  // },
];

const Technologies = () => {
  return (
    <section
      className={`flex flex-col items-center gap-5 w-[90%]  mr-auto ml-auto mt-15 mb-10`}
    >
      <h3 className="text-4xl self-start mb-13">Skills</h3>
      <div className="flex flex-col gap-30">
        <section className="flex flex-col gap-16">
          <p className="text-4xl text-center font-bold">
            Here are the tools I like to work with
          </p>
          <section className="flex items-center gap-12 justify-center">
            <img
              className="h-15 w-15"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            />

            <img
              className="h-15 w-15"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            />

            <img
              className="h-15 w-15"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
            />

            <img
              className="h-15 w-15"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-plain.svg"
            />

            <img
              className="h-15 w-15"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
            />

            <img
              className="h-15 w-15"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
            />
          </section>
        </section>
        {/* Skills Section */}
        <section className="flex items-center gap-10">
          {skills.map((data) => (
            <Card skill={data.skill} content={data.content} icon={data.icon} />
          ))}
        </section>
      </div>
    </section>
  );
};

export function Card({
  skill,
  content,
  icon,
}: {
  skill: string;
  content: string;
  icon: ReactNode;
}) {
  return (
    <div>
      <div className="card w-70 bg-base-100 card-md shadow-sm h-100">
        <div className="card-body">
          <section className="flex items-center  w-full">
            <h2 className="card-title">{skill}</h2>
            {icon}
          </section>
          <p className="text-sm">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
