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
    <section className="flex flex-col gap-15 w-[70%] mr-auto ml-auto mt-15 mb-10 items-ce">
      <h2>Projects</h2>
      <section className="grid grid-cols-1 justify-items-center justify-center gap-4  md:grid-cols-3 lg:grid-cols-4"></section>
    </section>
  );
};

export default Projects;
