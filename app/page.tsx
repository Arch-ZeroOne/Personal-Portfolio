import Intro from "./components/intro";
import Technologies from "./components/technologies";
import GithubStreak from "./components/githubstreak";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Summary from "./components/summary";
import Location from "./components/location";

export default function Home() {
  return (
    <section className="grid grid-cols-2 items-center place-items-center">
      <div className="flex flex-col gap-5 mt-15 items-center">
        <Location />
        <Intro />
      </div>
      <div className="flex flex-col gap-5 items-center">
        <GithubStreak />
        <Summary />
      </div>

      {/* <Footer />  */}
    </section>
  );
}
