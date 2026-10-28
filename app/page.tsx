import Intro from "./components/intro";
import Technologies from "./components/technologies";
import GithubStreak from "./components/githubstreak";

import Summary from "./components/summary";
import Location from "./components/location";
import Tools from "./components/tools";

import About from "./components/about";
import Projects from "./components/projects";
import Experience from "./components/experience";
export default function Home() {
  return (
    <section className="flex flex-col w-full items-center justify-center mr-auto ml-auto ">
      <Intro />

      <div className="grid grid-cols-2 ">
        <About />
        <Experience />
        <Projects />
      </div>
      {/* <div className="flex flex-col gap-5 items-center justify-center mt-10 w-full">
        <GithubStreak />

        <Tools />
      </div> */}
      {/* <Summary /> */}

      {/* <Footer />  */}
    </section>
  );
}
