import { Anaheim, Offside, Roboto } from "next/font/google";
import { Move, MoveUpRight } from "lucide-react";
const anaheim = Anaheim({
  weight: "400",
  subsets: ["latin"],
});
const offSide = Offside({
  weight: "400",
  subsets: ["latin"],
});
const Certificates = () => {
  return (
    <section
      className={`w-xl mx-auto px-6  ${anaheim.className} flex flex-col gap-4 `}
    >
      <hr className="text-gray-700 font-light" />
      <h2 className={`${offSide.className} text-sm font-bold text-gray-500`}>
        04 - Certificates
      </h2>
      <div className="space-y-6 text-lg  leading-relaxed tracking-normal">
        <ul className="list bg-base-100 rounded-box shadow-md">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            Most played songs this week
          </li>

        <li className="list-row flex items-center justify-between">
            <div>
              <div>Programming Wars Competition Certificate</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                Dorsu Banaybanay Campus
              </div>
            </div>

            <button className="btn btn-square btn-ghost">
              <MoveUpRight height={18} width={18} />
            </button>
          </li>

          <li className="list-row flex items-center justify-between">
            <div>
              <div>Programming Wars Competition Certificate</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                Dorsu Banaybanay Campus
              </div>
            </div>

            <button className="btn btn-square btn-ghost">
              <MoveUpRight height={18} width={18} />
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Certificates;
