import React from "react";
import { GitHubCalendar } from "react-github-calendar";
const GithubStreak = () => {
  return (
    <section className="flex flex-col gap-6 w-[80%]  mt-15 justify-center mr-auto ml-auto">
      <h3 className="self-start">My Github Contributions</h3>
      <div className="w-full">
        <GitHubCalendar username="Arch-ZeroOne" fontSize={15} blockSize={18} />
      </div>
    </section>
  );
};

export default GithubStreak;
