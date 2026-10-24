import React from "react";
import { Mail, Download } from "lucide-react";

const Links = () => {
  return (
    <section className="flex items-center gap-3 flex-col w-full">
      <button className="btn  btn-outline rounded-xl flex flex-row gap-4 items-center w-full">
        <Download height={20} width={20} />
        Download CV
      </button>
      <button className="btn btn-outline   rounded-xl flex flex-row gap-4 items-center w-full">
        <Mail height={20} width={20} />
        Get in Touch
      </button>
    </section>
  );
};

export default Links;
