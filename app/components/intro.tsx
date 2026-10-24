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
    <section className="flex flex-col gap-5 ">
      <div className="flex items-center gap-5 w-lg ">
        <div className="card bg-base-200  shadow-sm rounded-xl ">
          <figure className="px-10 pt-10">
            <img src="/images/me.png" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center w-full">
            <h2 className="card-title">Windyl Monton</h2>
            <p>Fullstack Web Developer/Flutter Developer</p>
            <div className="card-actions w-full">
              <Links />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
