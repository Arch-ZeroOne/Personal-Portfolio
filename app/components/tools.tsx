import React from "react";
import { Anaheim, Offside, Roboto } from "next/font/google";
import { GitHubCalendar } from "react-github-calendar";
const anaheim = Anaheim({
  weight: "400",
  subsets: ["latin"],
});
const offSide = Offside({
  weight: "400",
  subsets: ["latin"],
});

const techStack = [
  {
    category: "FRONTEND",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "DaisyUI",
      "Shadcn UI",
    ],
  },
  {
    category: "MOBILE",
    items: ["Flutter", "Dart", "Firebase"],
  },
  {
    category: "BACKEND",
    items: ["Node.js", "Express", "Laravel", "REST API"],
  },
  {
    category: "DATABASE",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Prisma",
      "Supabase",
      "Firestore",
    ],
  },
  {
    category: "TOOLS",
    items: ["Git", "GitHub", "VS Code", "Antigravity", "Postman", "Figma"],
  },
  {
    category: "DEPLOYMENT",
    items: ["Vercel", "Render", "Firebase Hosting"],
  },
];

export default function TechStack() {
  return (
    <div
      className={`w-[60%] mb-5 shadow-sm rounded-xl min-w-0  mr-auto ml-auto ${anaheim.className}`}
    >
      <hr className=" border-base-300 w-full" />
      <div className="p-6">
        <section className="w-full flex flex-col ">
          {techStack.map((group, index) => (
            <div
              key={group.category}
              className={`flex flex-col sm:flex-row items-start gap-3 sm:gap-6 py-4 ${
                index !== 0 ? "border-t border-base-300" : ""
              }`}
            >
              <div className="w-full sm:w-32 shrink-0 pt-1">
                <span className="text-xs font-mono text-base-content/60">
                  {group.category}
                </span>
              </div>

              <div className="flex flex-1 flex-wrap items-center gap-2 min-w-0">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="badge badge-outline badge-sm rounded-full px-3 py-3 font-mono whitespace-nowrap"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
