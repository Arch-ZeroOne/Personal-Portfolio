"use client";

const project_info = [
  {
    image: "./projects/aquaplant.png",
    name: "Aqua Plant",

    code_repo: "https://github.com/Arch-ZeroOne/AquaPlant",
    icon: "./icon/plant.png",
  },
  {
    image: "./projects/moviesearch.png",
    name: "Movie Search",

    code_repo: "https://github.com/Arch-ZeroOne/Movie-Search",
    live: "https://movie-search-three-xi.vercel.app/",
    icon: "./icon/movie.png",
  },
  {
    image: "./projects/stride.png",
    name: "Stride POS",

    code_repo: "https://github.com/Arch-ZeroOne/Stride",
    live: "https://stride-sooty.vercel.app/",
    icon: "./icon/cashier.png",
  },
];
const Projects = () => {
  return (
    <section className="flex flex-col gap-15 w-[80%] mr-auto ml-auto mt-15 mb-10 items-ce">
      <h2 className="text-4xl">Projects</h2>
    </section>
  );
};

export default Projects;
