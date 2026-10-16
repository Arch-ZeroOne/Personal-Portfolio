"use client";
import Badge from "./badge";
const project_info = [
  {
    image: "./projects/aquaplant.png",
    name: "Aqua Plant",
    description:
      "A smart IoT-based water monitoring system designed to track water quality and environmental conditions in real time. The application collects sensor data, processes readings through a Node.js backend, and provides users with actionable insights through an intuitive dashboard. Built to support efficient monitoring and early detection of water-related issues.",
    technologies: ["IoT", "Node.js"],
    code_repo: "https://github.com/Arch-ZeroOne/AquaPlant",
  },
  {
    image: "./projects/moviesearch.png",
    name: "Movie Search",
    description:
      "A responsive movie discovery platform that allows users to search for films, explore trending titles, and view detailed information such as ratings, release dates, genres, and summaries. The application integrates with a third-party movie API to deliver up-to-date content while providing a clean and user-friendly browsing experience.",
    technologies: ["React", "Tailwind CSS", "TMDB API"],
    code_repo: "https://github.com/Arch-ZeroOne/Movie-Search",
    live: "https://movie-search-three-xi.vercel.app/",
  },
  {
    image: "./projects/stride.png",
    name: "Stride POS",
    description:
      "A modern Point-of-Sale (POS) system built to simplify sales management, inventory tracking, and transaction processing for small businesses. The platform enables users to manage products, monitor stock levels, record sales activity, and generate operational insights through an organized and efficient interface.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    code_repo: "https://github.com/Arch-ZeroOne/Stride",
    live: "https://stride-sooty.vercel.app/",
  },
];
const Projects = () => {
  return (
    <section className="flex flex-col gap-15 w-[90%] md:w-[70%] mr-auto ml-auto mt-15 mb-10">
      <h2>Projects</h2>
      {project_info.map((data, index) => (
        <section
          className={`flex flex-col gap-4 w-full mr-auto ml-auto min-h-100`}
        >
          <div
            className={`card lg:card-side bg-base-100 shadow-sm border-none flex-col-reverse h-120 md:h-140  ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} h-full`}
          >
            <div className="self-center p-4 flex-col gap-7 h-full justify-">
              <h2 className="text-lg md:text-3xl md:font-bold">{data.name}</h2>
              <p className="text-md md:text-2xl">{data.description}</p>
              <div className="flex gap-3">
                {data.technologies.map((data) => (
                  <Badge badgeDescription={data} />
                ))}
              </div>
            </div>
            <figure className="rounded-lg border-gray-500 w-full">
              <img src={data.image} alt="Album" />
            </figure>
          </div>
        </section>
      ))}
    </section>
  );
};

export default Projects;
