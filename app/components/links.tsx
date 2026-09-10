const Links = () => {
  return (
    <section className="flex items-center gap-3">
      <button className="btn btn-outline">
        <p>Github</p>
        <a href="https://github.com/Arch-ZeroOne">
          <img
            className="h-5 w-auto"
            src="./icon/github.svg"
            alt="Github Link"
          />
        </a>
      </button>
      <button className="btn btn-outline">
        <p>Instagram</p>
        <a href="https://www.instagram.com/dev.windylm/">
          <img
            className="h-5 w-auto"
            src="./icon/instagram.svg"
            alt="Instagram Link"
          />
        </a>
      </button>
      <button className="btn btn-outline">
        <p>Linkedin</p>
        <a href="https://www.linkedin.com/in/windyl-monton-b0aa4b32b/?skipRedirect=true">
          <img
            className="h-5 w-auto"
            src="./icon/linkedin.svg"
            alt="Linkedin Link"
          />
        </a>
      </button>
    </section>
  );
};

export default Links;
