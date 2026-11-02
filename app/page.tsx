import Intro from "./components/intro";
import GithubStreak from "./components/githubstreak";
import Tools from "./components/tools";
import About from "./components/about";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Certificates from "./components/certificates";

export default function Home() {
  return (
    <section className="flex flex-col w-sm md:w-full items-center justify-center mr-auto ml-auto">
      <Intro />

      <div className="mr-auto ml-auto grid grid-cols-1 md:grid-cols-2 items-center md:items-start">
        <div className="flex flex-col items-center">
          <About />
          <Projects />
        </div>
        <div className="flex flex-col">
          <Experience />

          <Certificates />
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center  mt-10 w-full justify-center">
        <GithubStreak />
        <Tools />
      </div>
    </section>
  );
}
