import React from "react";
import { Doppio_One } from "next/font/google";
const dopio_one = Doppio_One({
  weight: "400",
  subsets: ["latin"],
});
const Services = () => {
  return (
    <section className="flex flex-col gap-15 w-[70%] mr-auto ml-auto mt-15 mb-10 items-ce">
      <h2>Services</h2>
      <section className="grid grid-cols-1 justify-items-center justify-center gap-4  md:grid-cols-3 lg:grid-cols-4"></section>
    </section>
  );
};

export default Services;
