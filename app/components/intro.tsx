import React from "react";
import Links from "./links";
import ThemeToggle from "./themetoggle";
import { Poppins } from "next/font/google";
import { Doppio_One } from "next/font/google";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const dopio_one = Doppio_One({
  weight: "400",
  subsets: ["latin"],
});

const Intro = () => {
  return (
    <section className="flex flex-col gap-4 w-[70%]  mr-auto ml-auto mt-15">
      <h1
        className={`text-center font-bold text:xs sm:text-sm   md:text-xl ${dopio_one.className}`}
      >
        Hey I am{" "}
        <span className="underline underline-offset-8">Windyl Monton!</span>
      </h1>
      <section className={dopio_one.className}>
        <div className="flex flex-col gap-5 xs: text-sm  md:text-left md:text-md">
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
      <section className="flex-col justify-center items-center  w-full md:flex-row">
        <div className="flex items-center gap-5   w-full   md:justify-end">
          <Links />
          <ThemeToggle />
        </div>
      </section>
    </section>
  );
};

export default Intro;
