import wcHeroBase from "../../public/wc-hero-base.png";
import wcHeroMd from "../../public/wc-hero-md.png";
import wcHeroLg from "../../public/wc-hero-lg.png";
import wcHeroXl from "../../public/wc-hero-xl.png";
import wcHero2Xl from "../../public/wc-hero-2xl.png";
import { breakpoint } from "../lib/breakpoint";
import Dots from "../components/Dots";
import WinterConferenceLogo from "./WinterConferenceLogo";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative">
      <Image
        className="z-[-1] object-cover md:hidden"
        src={wcHeroBase}
        alt="Some stuff"
        sizes="(max-width: 768px) 100vw"
        fill={true}
        priority={true}
      />
      <Image
        className="z-[-1] object-cover hidden md:block lg:hidden"
        src={wcHeroMd}
        alt="Some stuff"
        sizes="(max-width: 768px) 100vw"
        fill={true}
        priority={true}
      />
      <Image
        className="z-[-1] object-cover hidden lg:block xl:hidden"
        src={wcHeroLg}
        alt="Some stuff"
        sizes="(max-width: 768px) 100vw"
        fill={true}
        priority={true}
      />
      <Image
        className="z-[-1] object-cover hidden xl:block 2xl:hidden"
        src={wcHeroXl}
        alt="Some stuff"
        sizes="(max-width: 768px) 100vw"
        fill={true}
        priority={true}
      />
      <Image
        className="z-[-1] object-cover hidden 2xl:block"
        src={wcHero2Xl}
        alt="Some stuff"
        sizes="(max-width: 768px) 100vw"
        fill={true}
        priority={true}
      />
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
