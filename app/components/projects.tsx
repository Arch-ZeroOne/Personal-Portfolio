"use client";
import { useState } from "react";
import Technologies from "./technologies";
const project_info = [
  {
    image: "./projects/aquaplant.png",
    name: "Aqua Plant",
    description:
      "A smart IoT-based water monitoring system designed to track water quality and environmental conditions in real time. The application collects sensor data, processes readings through a Node.js backend, and provides users with actionable insights through an intuitive dashboard. Built to support efficient monitoring and early detection of water-related issues.",
    code_repo: "https://github.com/Arch-ZeroOne/AquaPlant",
    technologies: ["HTML5", "CSS", "Node.js", "C++", "Firebase"],
  },
  {
    image: "./projects/moviesearch.png",
    name: "Movie Search",
    description:
      "A responsive movie discovery platform that allows users to search for films, explore trending titles, and view detailed information such as ratings, release dates, genres, and summaries. The application integrates with a third-party movie API to deliver up-to-date content while providing a clean and user-friendly browsing experience.",
    code_repo: "https://github.com/Arch-ZeroOne/Movie-Search",
    live: "https://movie-search-three-xi.vercel.app/",
    technologies: ["React", "TMDB Api", "Axios", "C++"],
  },
  {
    image: "./projects/stride.png",
    name: "Stride POS",
    description:
      "A modern Point-of-Sale (POS) system built to simplify sales management, inventory tracking, and transaction processing for small businesses. The platform enables users to manage products, monitor stock levels, record sales activity, and generate operational insights through an organized and efficient interface.",
    code_repo: "https://github.com/Arch-ZeroOne/Stride",
    live: "https://stride-sooty.vercel.app/",
    technologies: ["React", "Postgresql", "Node.js", "Express.js"],
  },
];
const Projects = () => {
  return (
    <section className="flex flex-col gap-15 w-[70%] mr-auto ml-auto mt-15 mb-10">
      <h2>Projects</h2>
      {project_info.map((data, index) => (
        <section className={`flex flex-col gap-4 w-[90%] mr-auto ml-auto`}>
          <div
            className={`card lg:card-side bg-base-100 shadow-sm border-none  ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
          >
            <div className="card-body ">
              <h2 className="card-title">{data.name}</h2>
              <p>{data.description}</p>
              <section className="flex flex-col gap-4">
                <h4>Technologies Used</h4>
                <div className="flex gap-3">
                  {data.technologies &&
                    data.technologies.map((technology) => (
                      <div className="badge badge-soft badge-primary">
                        {technology}
                      </div>
                    ))}
                </div>
              </section>
            </div>
            <figure className="rounded-lg border-gray-500">
              <img src={data.image} alt="Album" />
            </figure>
          </div>
        </section>
      ))}
    </section>
  );
};

export default Projects;
