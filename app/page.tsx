import Intro from "./components/intro";
import Technologies from "./components/technologies";
import GithubStreak from "./components/githubstreak";
import Projects from "./components/projects";
import Footer from "./components/footer";

export default function Home() {
  return (
    <section className="flex flex-col gap-5">
      <Intro />
      <Technologies />
      <GithubStreak />
      <Projects />

      <Footer />
    </section>
  );
}
