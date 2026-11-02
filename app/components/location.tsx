import { MapPin } from "lucide-react";
import { Offside } from "next/font/google";
const offSide = Offside({
  weight: "400",
  subsets: ["latin"],
});
const Location = () => {
  return (
    <h2
      className={`mr-auto ml-auto md:ml-0 md:mr-0 text-xs text-gray-400 flex   ${offSide.className}`}
    >
      <MapPin height={20} width={20} /> Lupon, Davao Oriental Philippines
    </h2>
  );
};

export default Location;
