import React from "react";
import Links from "./links";
import ThemeToggle from "./themetoggle";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Intro = () => {
  return (
    <section className="flex flex-col gap-4 w-[70%]  mr-auto ml-auto mt-15">
      <h1
        className={` font-bold text:xs sm:text-sm  md:text-left md:text-lg ${poppins.className}`}
      >
        Hey I am{" "}
        <span className="underline underline-offset-8 decoration-violet-400">
          Windyl Monton!
        </span>
      </h1>
      <section className={poppins.className}>
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
      <section className="flex items-center  w-full">
        <div className="flex items-center gap-4 w-full">
          <button className="btn btn-outline btn-primary rounded-xl">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M3 9H21M12 18V12M15 15.001L9 15M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            Send Email
          </button>
          <button className="btn  rounded-xl btn-outline btn-secondary">
            <svg
              width="22px"
              height="22px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 7L10.94 11.3375C11.5885 11.7428 12.4115 11.7428 13.06 11.3375L20 7M5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            Book Appointment
          </button>
        </div>
        <div className="flex items-center gap-5   w-full justify-end">
          <Links />
          <ThemeToggle />
        </div>
      </section>
    </section>
  );
};

export default Intro;
