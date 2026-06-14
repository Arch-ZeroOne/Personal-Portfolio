import React from "react";
import { GitHubCalendar } from "react-github-calendar";
const GithubStreak = () => {
  return (
    <div className="flex flex-col gap-6 w-[50%] mr-auto ml-auto mt-15">
      <h3>My Github Contributions</h3>

      <GitHubCalendar username="Arch-ZeroOne" />
    </div>
  );
};

export default GithubStreak;
