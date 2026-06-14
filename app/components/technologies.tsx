import React from "react";

const Technologies = () => {
  return (
    <section className="flex flex-col gap-6 w-[50%] mr-auto ml-auto mt-15">
      <h2>Technologies</h2>
      <div className="flex items-center gap-5">
        <img className="h-10" src="./icon/java.svg"></img>
        <img className="h-10" src="./icon/react.svg"></img>
        <img className="h-10" src="./icon/nextjs.svg"></img>
        <img className="h-10" src="./icon/nodejs.svg"></img>
        <img className="h-10" src="./icon/prisma.svg"></img>
        <img className="h-10" src="./icon/supabase.png"></img>
        <img className="h-10" src="./icon/postgres.png"></img>
        <img className="h-10" src="./icon/git.png"></img>
        <img className="h-10" src="./icon/github.png"></img>
      </div>
    </section>
  );
};

export default Technologies;
