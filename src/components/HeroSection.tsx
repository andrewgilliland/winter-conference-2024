import Image from "next/image";
import winterConference2024Logo from "../../public/WC24_logo-horiz_RGB 1.svg";
import mcmenamy1 from "../../public/mcmenamy-1.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-cover bg-center">
      <Image
        src={mcmenamy1}
        alt="McMenamy laying down some knowledge."
        className="z-0 absolute"
      />
      <div className="w-full h-[33.5vh] bg-black opacity-70 z-10 absolute" />
      <div className="flex flex-col items-center gap-6 px-8 z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2">
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
