import { Anaheim, Offside, Roboto } from "next/font/google";

const anaheim = Anaheim({
  weight: "400",
  subsets: ["latin"],
});
const offSide = Offside({
  weight: "400",
  subsets: ["latin"],
});
const About = () => {
  return (
    <section
      className={`w-xl mx-auto px-6 py-16 md:py-24 ${anaheim.className} flex flex-col gap-4`}
    >
      <hr className="text-gray-700 font-light" />
      <h2 className={`${offSide.className} text-sm font-bold text-gray-500`}>
        01 - about
      </h2>
      <div className="space-y-6 text-lg  leading-relaxed tracking-normal">
        <p>
          Hi, I’m <span className="font-bold">Windyl Monton</span>—a{" "}
          <span className="font-semibold">
            full-stack web and cross-platform mobile developer
          </span>{" "}
          dedicated to building clean, scalable digital products. I specialize
          in architecting responsive web applications using{" "}
          <span className="font-medium">React, Next.js, and Tailwind CSS</span>,
          alongside crafting smooth, native-feeling mobile experiences with{" "}
          <span className="font-medium">Flutter and Dart</span>.
        </p>

        <p>
          Beyond the user interface, I enjoy owning the entire development
          lifecycle by pairing sleek frontends with reliable backend
          architectures powered by{" "}
          <span className="font-medium">
            Node.js, Express, PostgreSQL, and Firebase
          </span>
          . Whether working on a browser-based platform or a mobile app, my
          focus is always on turning complex technical problems into intuitive,
          real-world solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
