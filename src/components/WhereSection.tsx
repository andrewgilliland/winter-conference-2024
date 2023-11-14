import Image from "next/image";
import Container from "./Container";
import SectionHeader from "./SectionHeader";
import map from "../../public/wc24-map-1.jpg";
import ButtonLink from "./ButtonLink";

const WhereSection = () => {
  return (
    <section className="py-10">
      <Container>
        <SectionHeader
          dividerHeading="Where is Wc24?"
          mainHeading="21 Locations to Choose From"
          subHeading="Register today for a location near you!"
        />
        <Image
          src={map}
          alt="Winter Conference 2024 Locations Map"
          priority={true}
        />
        <div className="hidden md:block">
          <ButtonLink backgroundColor="bg-black" />
        </div>
      </Container>
    </section>
  );
};

export default WhereSection;
