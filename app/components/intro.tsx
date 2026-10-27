import React from "react";
import Links from "./links";
import { MoveUpRight } from "lucide-react";
import ThemeToggle from "./themetoggle";
import { Poppins } from "next/font/google";
import Location from "./location";
import { Anaheim } from "next/font/google";
const anaheim = Anaheim({
  weight: "400",
  subsets: ["latin"],
});

const Intro = () => {
  return (
    <section className="flex  gap-5 w-4xl mt-30 items-center ">
      <div className="flex w-full items-center">
        <div className="flex flex-col w-full h-40 gap-5 items-center">
          <div className="flex items-center gap-8 w-full">
            <img
              src="/images/me.png"
              alt="Shoes"
              className="rounded-md h-40 w-40"
            />
            <div className="flex flex-col  w-full  gap-2">
              <h2 className={`text-4xl font-bold ${anaheim.className}`}>
                Windyl Monton
              </h2>
              <p className={`font-bold text-gray-500`}>
                Fullstack Web Developer/Flutter Developer
              </p>
              <Location />
            </div>
            <ThemeToggle />
          </div>
          <div className="flex items-center gap-4 w-full">
            <button className="btn btn-neutral rounded-xl text-xs">
              RESUME
              <MoveUpRight height={15} width={15} />
            </button>
            <div className="flex gap-4 items-center self-start w-full">
              <svg
                fill="#000000"
                className="w-5 h-5"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 45.959 45.959"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M5.392,0.492C2.268,0.492,0,2.647,0,5.614c0,2.966,2.223,5.119,5.284,5.119c1.588,0,2.956-0.515,3.957-1.489 c0.96-0.935,1.489-2.224,1.488-3.653C10.659,2.589,8.464,0.492,5.392,0.492z M7.847,7.811C7.227,8.414,6.34,8.733,5.284,8.733 C3.351,8.733,2,7.451,2,5.614c0-1.867,1.363-3.122,3.392-3.122c1.983,0,3.293,1.235,3.338,3.123 C8.729,6.477,8.416,7.256,7.847,7.811z"></path>{" "}
                      <path d="M0.959,45.467h8.988V12.422H0.959V45.467z M2.959,14.422h4.988v29.044H2.959V14.422z"></path>{" "}
                      <path d="M33.648,12.422c-4.168,0-6.72,1.439-8.198,2.792l-0.281-2.792H15v33.044h9.959V28.099c0-0.748,0.303-2.301,0.493-2.711 c1.203-2.591,2.826-2.591,5.284-2.591c2.831,0,5.223,2.655,5.223,5.797v16.874h10v-18.67 C45.959,16.92,39.577,12.422,33.648,12.422z M43.959,43.467h-6V28.593c0-4.227-3.308-7.797-7.223-7.797 c-2.512,0-5.358,0-7.099,3.75c-0.359,0.775-0.679,2.632-0.679,3.553v15.368H17V14.422h6.36l0.408,4.044h1.639l0.293-0.473 c0.667-1.074,2.776-3.572,7.948-3.572c4.966,0,10.311,3.872,10.311,12.374V43.467z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <svg
                fill="#000000"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Mail">
                    {" "}
                    <path d="M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm-14.87,1h14.87a1.489,1.489,0,0,1,1.49,1.39c-2.47,1.32-4.95,2.63-7.43,3.95a6.172,6.172,0,0,1-1.06.53,2.083,2.083,0,0,1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26-1.14-.6-2.3-1.21-3.44-1.82A1.491,1.491,0,0,1,4.565,5.065Zm16.37,12.37a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V7.6c2.36,1.24,4.71,2.5,7.07,3.75a5.622,5.622,0,0,0,1.35.6,2.872,2.872,0,0,0,2-.41c1.45-.76,2.89-1.53,4.34-2.29,1.04-.56,2.07-1.1,3.11-1.65Z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M11.7444 14C5.13962 13 5.64768 8.5 7.67987 7C7.27882 6.39155 6.66375 4 7.1718 3.00001C8.18792 3.5 9.55173 4.23944 10.2202 5C12.2524 4 15.3007 4 16.8249 5C17.226 4.18873 18.6968 3.42254 19.3652 3C19.9668 3.60845 19.5323 5.98592 19.3652 7C20.3678 9.19718 20.8894 12.5 15.3007 14C16.1273 14.6688 17.4571 16.2652 18.3819 18.0893C19.0373 19.3821 17.7844 20.5701 16.3571 20.3176C15.3606 20.1413 14.2545 20 13.2685 20C12.0745 20 10.494 20.2071 9.12617 20.4329C7.71155 20.6663 6.56735 19.4472 7.29296 18.2106C7.81974 17.3128 8.48393 16.4725 9.20408 16C8.95342 15.662 7.9605 14.6887 6.15574 15.5C3.89979 16.5141 2.60607 14.2676 3.10739 13"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
