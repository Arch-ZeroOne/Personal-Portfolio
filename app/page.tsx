import Intro from "./components/intro";
import Technologies from "./components/technologies";
import GithubStreak from "./components/githubstreak";
import Projects from "./components/projects";

import Summary from "./components/summary";
import Location from "./components/location";
import Tools from "./components/tools";
export default function Home() {
  return (
    <section className="flex flex-col w-full items-center justify-center mr-auto ml-auto ">
      <Intro />

      {/* <div className="flex flex-col gap-5 items-center justify-center mt-10 w-full">
        <GithubStreak />

        <Tools />
      </div> */}
      {/* <Summary /> */}

      {/* <Footer />  */}
    </section>
  );
}
