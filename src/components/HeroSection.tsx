"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import winterConference2024Logo from "../../public/WC24_logo-horiz_RGB 1.svg";
import farmer1 from "../../public/farmer-1.jpg";
import mcmenamy2 from "../../public/mcmenamy-2.jpg";
import { breakpoint } from "../lib/breakpoint";

const HeroSection = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="bg-center bg-cover"
      style={{
        backgroundImage: `url(${
          viewportWidth < breakpoint.md ? farmer1.src : mcmenamy2.src
        })`,
      }}
    >
      <div className="flex flex-col items-center gap-6 px-8 py-20">
        <Image
          src={winterConference2024Logo}
          alt="Winter Conference 2024 Logo"
        />
        <h2 className="font-montserrat text-green-300 text-xl md:text-4xl text-center">
          Experience the event that will change the way you farm.
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
