import Intro from "./components/intro";
import Technologies from "./components/technologies";
import GithubStreak from "./components/githubstreak";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Services from "./components/services";
import IntroMessage from "./components/intro-message";
import Navbar from "./components/navbar";
export default function Home() {
  return (
    <Navbar>
      <section className="flex flex-col gap-8 scroll-smooth">
        <Intro />
        <IntroMessage />
        <Technologies />
      </section>
    </Navbar>
  );
}
