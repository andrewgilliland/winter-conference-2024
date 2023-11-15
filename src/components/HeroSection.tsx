"use client";

import { useEffect, useState } from "react";
import farmer1 from "../../public/farmer-1.jpg";
import mcmenamy2 from "../../public/mcmenamy-2.jpg";
import { breakpoint } from "../lib/breakpoint";
import Dots from "../components/Dots";
import WinterConferenceLogo from "./WinterConferenceLogo";

const HeroSection = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="relative bg-center bg-cover"
      style={{
        backgroundImage: `url(${
          viewportWidth < breakpoint.md ? farmer1.src : mcmenamy2.src
        })`,
      }}
    >
      <Dots className="hidden md:block absolute top-2 left-2" />
      <Dots className="hidden md:block absolute bottom-1 right-2" />
      <div className="flex flex-col items-center gap-6 px-8 py-20">
        <WinterConferenceLogo className="h-16 md:h-[92px] lg:h-[131px]" />
        <h2 className="font-montserrat text-green-300 text-xl md:text-2xl xl:text-4xl text-center max-w-[400px] xl:max-w-[600px]">
          Experience the event that will change the way you farm.
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
