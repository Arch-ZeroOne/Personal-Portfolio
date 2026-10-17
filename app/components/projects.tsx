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

    code_repo: "https://github.com/Arch-ZeroOne/Movie-Search",
    live: "https://movie-search-three-xi.vercel.app/",
  },
  {
    image: "./projects/stride.png",
    name: "Stride POS",
    description:
      "A modern Point-of-Sale (POS) system built to simplify sales management, inventory tracking, and transaction processing for small businesses. The platform enables users to manage products, monitor stock levels, record sales activity, and generate operational insights through an organized and efficient interface.",

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
          className={`flex flex-col gap-10  w-full mr-auto ml-auto min-h-100`}
        >
          <div
            className={`card lg:card-side bg-base-100 shadow-sm border-none flex-col-reverse h-20 md:h-140  ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} h-full border-0 shadow-none`}
          >
            <div className="flex self-center p-4 flex-col justify-between  h-100 md:h-80 gap-1 md:gap-20 items-center w-[80%]">
              <section className="flex flex-col gap-7 ">
                <h2 className="text-md font-bold md:text-3xl ">{data.name}</h2>
                <p className="text-sm md:text-2xl">{data.description}</p>
              </section>

              {/* Links for source code and repo */}
              <div className="flex gap-2 justify-end md:justify-start items-center self-start">
                {data.code_repo && (
                  <button className="btn btn-neutral rounded-lg w-20 h-8 md:h-15 md:w-40 md:rounded-xl">
                    <a href={data.code_repo} className="text-xs md:text-xl">
                      Code
                    </a>
                  </button>
                )}
                {data.live && (
                  <button className="btn btn-primary rounded-lg w-20 h-8 md:h-15 md:w-40 md:rounded-xl">
                    <a href={data.live} className="text-xs md:text-xl">
                      Live
                    </a>
                  </button>
                )}
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
