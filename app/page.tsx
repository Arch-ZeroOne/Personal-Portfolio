import Image from "next/image";
import Intro from "./components/intro";
import Technologies from "./components/technologies";
import GithubStreak from "./components/githubstreak";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Book from "./components/book";
export default function Home() {
  return (
    <section className="flex flex-col gap-5">
      <Intro />
      <Technologies />
      <GithubStreak />
      <Projects />
      <Book />
      <Footer />
    </section>
  );
}
