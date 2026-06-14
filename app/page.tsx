import Image from "next/image";
import Intro from "./components/intro";
import Technologies from "./components/technologies";
import GithubStreak from "./components/githubstreak";
export default function Home() {
  return (
    <section className="flex flex-col gap-5">
      <Intro />
      <Technologies />
      <GithubStreak />
    </section>
  );
}
