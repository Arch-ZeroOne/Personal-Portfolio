import React from "react";
import { MapPin } from "lucide-react";
const Location = () => {
  return (
    <h2 className="text-sm text-gray-400 flex items-center gap-">
      <MapPin height={20} width={20} />
      Lupon, Davao Oriental Philippines
    </h2>
  );
};

export default Location;
