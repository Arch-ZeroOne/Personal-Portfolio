import React from "react";
import Links from "./links";
import ThemeToggle from "./themetoggle";
import { Space_Grotesk } from "next/font/google";
const space_grotesk = Space_Grotesk({
  weight: "400",
  subsets: ["latin"],
});

const Intro = () => {
  return (
    <section className="flex flex-col gap-4 w-[50%] mr-auto ml-auto mt-15">
      <h1 className="font-bold text-2xl">Windyl Monton</h1>
      <section className={space_grotesk.className}>
        <div className="flex flex-col gap-5">
          <div>
            Hello! My name is{" "}
            <span className=" text-violet-600">Windyl Monton </span>, and I am
            currently a third-year{" "}
            <span className=" text-violet-600">
              Bachelor of Science in Information Technology (BSIT){" "}
            </span>
            student with a strong interest in web development. As an aspiring
            web developer, I am passionate about creating functional,
            responsive, and user-friendly web applications that provide
            meaningful experiences to users. I continuously seek opportunities
            to expand my knowledge and improve my technical skills through
            academic projects, self-learning, and hands-on practice.
          </div>
          <div>
            I am eager to grow both personally and professionally in the field
            of technology by exploring modern web development tools and best
            practices. With determination, adaptability, and a willingness to
            learn, I aim to become a competent web developer capable of
            contributing innovative solutions to real-world challenges. I
            believe that every project and learning experience brings me one
            step closer to achieving my goals in the ever-evolving world of
            information technology.
          </div>
        </div>
      </section>
      <div className="flex justify-between w-full">
        <Links />
        <ThemeToggle />
      </div>
    </section>
  );
};

export default Intro;
