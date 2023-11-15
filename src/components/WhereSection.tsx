import Image from "next/image";
import Container from "./Container";
import SectionHeader from "./SectionHeader";
import tremontAudience1 from "../../public/tremont-audience-1.jpeg";
import map from "../../public/wc24-map-1.jpg";
import ButtonLink from "./ButtonLink";

const WhereSection = () => {
  return (
    <section
      className="relative bg-center bg-cover z-0"
      style={{
        backgroundImage: `url(${tremontAudience1.src})`,
      }}
    >
      <div className="absolute h-full w-full bg-black opacity-80 z-0" />
      <div className="py-10">
        <Container>
          <SectionHeader
            className="z-10"
            dividerHeading="Where is Wc24?"
            mainHeading="21 Locations to Choose From"
            subHeading="Register today for a location near you!"
          />
          <Image
            className="z-10"
            src={map}
            alt="Winter Conference 2024 Locations Map"
            priority={true}
          />
          <div className="hidden md:block">
            <ButtonLink backgroundColor="transparent" />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default WhereSection;
