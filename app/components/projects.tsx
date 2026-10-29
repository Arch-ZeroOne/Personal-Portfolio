import { Anaheim, Offside, Roboto } from "next/font/google";

const anaheim = Anaheim({
  weight: "400",
  subsets: ["latin"],
});
const offSide = Offside({
  weight: "400",
  subsets: ["latin"],
});

const Projects = () => {
  return (
    <section
      className={`w-xl mx-auto px-6 ${anaheim.className} flex flex-col gap-4`}
    >
      <hr className=" border-base-300 " />
      <h2 className={`${offSide.className} text-sm font-bold text-gray-500`}>
        02 - projects
      </h2>
      <div className="space-y-6 text-lg md:text-xl leading-relaxed tracking-normal grid grid-cols-2">
        <a href="#" className="hover-3d cursor-pointer">
          {/* content */}
          <div className="card w-60 h-60 ">
            <div className="card-body">
              <div className="flex justify-between ">
                <div className="font-bold">Movie Search</div>
              </div>
              <div className="text-lg mb-4 opacity-80">
                A movie platform web app with list of popular movies
              </div>
              <div className="flex gap-2 text-xs">
                <div className="badge badge-outline  text-xs">REACT</div>
                <div className="badge  badge-outline  text-xs">AXIOS</div>
                <div className="badge badge-outline  text-xs">TMDB API</div>
              </div>
            </div>
          </div>
        </a>
        <a href="#" className="hover-3d  cursor-pointer">
          {/* content */}
          <div className="card w-60 h-60">
            <div className="card-body">
              <div className="flex justify-between ">
                <div className="font-bold">Stride</div>
              </div>
              <div className="text-lg mb-4 opacity-80">
                A web app point of sale system with receipt generation
              </div>
              <div className="grid grid-cols-3 gap-4 text-xs">
                <div className="badge badge-outline  text-xs">REACT</div>
                <div className="badge badge-outline  text-xs">AXIOS</div>
                <div className="badge badge-outline  text-xs">NODE</div>
                <div className="badge  badge-outline  text-xs">EXPRESS</div>
                <div className="badge  badge-outline  text-xs">POSTGRES</div>
              </div>
            </div>
          </div>
        </a>
        <a href="#" className="hover-3d  cursor-pointer">
          {/* content */}
          <div className="card w-60 h-60 ">
            <div className="card-body">
              <div className="flex justify-between ">
                <div className="font-bold">Aqua Plant</div>
              </div>
              <div className="text-lg mb-4 opacity-80">
                An IOT automatic watering system prototype
              </div>
              <div className="grid grid-cols-3 gap-4 text-xs">
                <div className="badge badge-outline  text-xs">REACT</div>
                <div className="badge  badge-outline  text-xs">AXIOS</div>
                <div className="badge  badge-outline  text-xs">NODE</div>
                <div className="badge  badge-outline  text-xs">
                  LOCALSTORAGE
                </div>
              </div>
            </div>
          </div>
        </a>

        <a href="#" className="hover-3d  cursor-pointer">
          {/* content */}
          <div className="card w-60 h-60  ">
            <div className="card-body">
              <div className="flex justify-between ">
                <div className="font-bold">Copra Watch</div>
              </div>
              <div className="text-lg mb-4 opacity-80">
                A webscraper and browser extension for latest copra price list
              </div>
              <div className="grid grid-cols-3 gap-4 ">
                <div className="badge  badge-outline text-xs">REACT</div>
                <div className="badge badge-outline  text-xs">AXIOS</div>
                <div className="badge  badge-outline  text-xs">NODE</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
