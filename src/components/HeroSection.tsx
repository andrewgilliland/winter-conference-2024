import Image from "next/image";
import winterConference2024Logo from "../../public/WC24_logo-horiz_RGB 1.svg";

const HeroSection = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col items-center gap-6 px-8">
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
