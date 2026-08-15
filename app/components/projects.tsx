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
      <section className="grid grid-cols-1 justify-items-center justify-center gap-4  md:grid-cols-3 lg:grid-cols-4">
        {project_info.map((data, index) => (
          <div
            className="card bg-base-100 w-full shadow-sm border-x-black cursor-pointer hover:bg-black hover:text-white"
            onClick={() => window.open(data.live ? data.live : data.code_repo)}
          >
            <div className="card-body">
              <div className="flex items-center gap-2 ">
                <img className="h-10 w-10" src={data.icon}></img>
                <h2 className="card-title">{data.name}</h2>
              </div>
              <p className="text-[10px]">
                {data.live ? data.live : data.code_repo}
              </p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Projects;
