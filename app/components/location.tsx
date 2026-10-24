import React from "react";
import { MapPin } from "lucide-react";
const Location = () => {
  return (
    <div className="card w-130 bg-base-200  shadow-sm rounded-xl">
      <div className="card-body">
        <h2 className="card-title text-sm">
          <MapPin height={20} width={20} />
          Github Contributions
        </h2>
      </div>
    </div>
  );
};

export default Location;
