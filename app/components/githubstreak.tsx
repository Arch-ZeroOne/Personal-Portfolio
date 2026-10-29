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
const GithubStreak = () => {
  return (
    <section
      className={`w-[60%] mr-auto ml-auto mx-auto px-6  ${offSide.className} flex flex-col gap-4 items-center`}
    >
      <hr className=" border-base-300 w-full" />
      <h2
        className={`${offSide.className} text-sm font-bold text-gray-500 self-start`}
      >
        05 - tech Stack and activity
      </h2>
      <div className="space-y-6 text-lg  leading-relaxed tracking-normal self-start">
        <GitHubCalendar username="Arch-ZeroOne" />
      </div>
    </section>
  );
};

export default GithubStreak;
