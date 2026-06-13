import React from "react";

const Links = () => {
  return (
    <section className="flex items-center gap-3">
      <a href="https://github.com/Arch-ZeroOne">
        <img className="h-5 w-auto" src="./icon/github.svg" alt="Github Link" />
      </a>

      <a href="https://www.instagram.com/dev.windylm/">
        <img
          className="h-5 w-auto"
          src="./icon/instagram.svg"
          alt="Instagram Link"
        />
      </a>
      <a href="https://www.linkedin.com/in/windyl-monton-b0aa4b32b/?skipRedirect=true">
        <img
          className="h-5 w-auto"
          src="./icon/linkedin.svg"
          alt="Linkedin Link"
        />
      </a>
    </section>
  );
};

export default Links;
