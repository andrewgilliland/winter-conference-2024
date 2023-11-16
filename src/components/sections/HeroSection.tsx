"use client";

import wcHeroBase from "../../../public/wc-hero-base.png";
import wcHeroMd from "../../../public/wc-hero-md.png";
import wcHeroLg from "../../../public/wc-hero-lg.png";
import wcHeroXl from "../../../public/wc-hero-xl.png";
import wcHero2Xl from "../../../public/wc-hero-2xl.png";
import { breakpoint } from "../../lib/breakpoint";
import Dots from "../svgs/Dots";
import WinterConferenceLogo from "../svgs/WinterConferenceLogo";
import Image from "next/image";

const HeroSection = () => {
  const heroImages = [
    {
      className: "md:hidden",
      src: wcHeroBase,
      sizes: breakpoint.base,
    },
    {
      className: "hidden md:block lg:hidden",
      src: wcHeroMd,
      sizes: breakpoint.md,
    },
    {
      className: "hidden lg:block xl:hidden",
      src: wcHeroLg,
      sizes: breakpoint.lg,
    },
    {
      className: "hidden xl:block 2xl:hidden",
      src: wcHeroXl,
      sizes: breakpoint.xl,
    },
    {
      className: "hidden 2xl:block",
      src: wcHero2Xl,
      sizes: breakpoint["2xl"],
    },
  ];

  return (
    <section className="relative">
      {heroImages.map(({ className, src, sizes }, index) => (
        <Image
          key={index}
          className={`z-[-1] object-cover ${className}`}
          src={src}
          alt="Some stuff"
          sizes={`(max-width: ${sizes}px) 100vw`}
          fill={true}
          priority={true}
        />
      ))}
      <Dots className="hidden md:block absolute top-2 left-2" />
      <Dots className="hidden md:block absolute bottom-1 right-2" />
      <div className="flex flex-col items-center gap-6 py-20">
        <WinterConferenceLogo className="h-16 md:h-[92px] lg:h-[131px]" />
        <h2 className="font-montserrat font-medium text-green-300 text-xl md:text-2xl xl:text-4xl text-center max-w-[378px] xl:max-w-[600px]">
          Experience the event that will change the way you farm.
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
