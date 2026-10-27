import React from "react";
import { GitHubCalendar } from "react-github-calendar";
const GithubStreak = () => {
  return (
    <div className="card shadow-sm rounded-xl min-w-0">
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
