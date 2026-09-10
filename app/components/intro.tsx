import Image from "next/image";
import Links from "./links";

const Intro = () => {
  return (
    <section className="flex items-center  gap-4  w-[80%]  mr-auto ml-auto mt-15">
      <div className="flex flex-col gap-5 w-[80%]">
        <h1 className="text-5xl/15 font-bold">
          A Filipino Web Developer Based in Lupon, Davao Oriental
        </h1>
        <section className="text-3xl/12 w-md">
          A Web Developer Specializing in React/Next.js with Postgres and
          Supabase
        </section>
        <div>
          <Links />
        </div>
      </div>

      <div>
        <Image src={"/image/self.jpg"} width={450} height={500} alt="Profile" />
      </div>
    </section>
  );
};

export default Intro;
