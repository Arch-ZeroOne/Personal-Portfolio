import React from "react";

const Technologies = () => {
  return (
    <section className="flex flex-col gap-8 w-[80%] mr-auto ml-auto mt-15">
      <h2 className=" text-center sm:text-left">Technologies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-5 sm:gap-5 justify-center gap-3 place-items-center">
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
