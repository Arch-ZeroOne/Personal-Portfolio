import React from "react";
import { GitHubCalendar } from "react-github-calendar";
const GithubStreak = () => {
  return (
    <section className="flex flex-col gap-6 w-[90%] md:w-[70%]  mt-15 justify-center mr-auto ml-auto">
      <h3 className="self-start">My Github Contributions</h3>
      <div className="w-full">
        <GitHubCalendar username="Arch-ZeroOne" fontSize={20} blockSize={25} />
      </div>
    </section>
  );
};

export default GithubStreak;
