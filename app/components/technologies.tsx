import React from "react";

import { JetBrains_Mono } from "next/font/google";

const dopio_one = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
});

const Technologies = () => {
  return (
    <section
      className={`flex flex-col items-center gap-5  mr-auto ml-auto mt-15 `}
    >
      <h3 className="text-4xl self-start">Skills</h3>
      <div>
        <p className="text-2xl">Here are the tools I like to work with</p>
        <section></section>
      </div>
    </section>
  );
};

export default Technologies;
