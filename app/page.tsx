import Intro from "./components/intro";
import Technologies from "./components/technologies";
import GithubStreak from "./components/githubstreak";
import Summary from "./components/summary";
import Location from "./components/location";
import Tools from "./components/tools";
import About from "./components/about";
import Projects from "./components/projects";
import Experience from "./components/experience";

import Certificates from "./components/certificates";

export default function Home() {
  return (
    <section className="flex flex-col w-full items-center justify-center mr-auto ml-auto ">
      <Intro />

      <div className="grid grid-cols-2 ">
        <div className="flex flex-col">
          <About />
          <Projects />
        </div>

        <div className="flex flex-col  items-center">
          <Experience />
          <Certificates />
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center mt-10 w-full">
        <GithubStreak />
      </div>
      {/* <Summary /> */}

      {/* <Footer />  */}
    </section>
  );
}
