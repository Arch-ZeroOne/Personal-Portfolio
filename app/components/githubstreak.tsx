import React from "react";
import { GitHubCalendar } from "react-github-calendar";
const GithubStreak = () => {
  return (
    <div className="card w-200 bg-base-200  shadow-sm rounded-xl">
      <div className="card-body">
        <h2 className="card-title">Github Contributions</h2>
        <div className="w-full">
          <GitHubCalendar
            username="Arch-ZeroOne"
            fontSize={13}
            blockSize={13}
          />
        </div>
      </div>
    </div>
  );
};

export default GithubStreak;
