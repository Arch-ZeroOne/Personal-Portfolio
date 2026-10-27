import React from "react";
import { Mail, Download } from "lucide-react";

const Links = () => {
  return (
    <section className="flex items-center gap-3  min-w-0 w-full">
      <button className="btn btn-soft btn-neutral  rounded-lg flex flex-row gap-4 items-center ">
        <Download height={20} width={20} />
        Download CV
      </button>
      <button className="btn btn-soft btn-neutral   rounded-lg flex flex-row gap-4 items-center ">
        <Mail height={20} width={20} />
        Get in Touch
      </button>
    </section>
  );
};

export default Links;
