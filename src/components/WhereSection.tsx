import Container from "./Container";
import SectionHeader from "./SectionHeader";

const WhereSection = () => {
  return (
    <section className="py-10">
      <Container>
        <SectionHeader
          dividerHeading="Where is Wc24?"
          mainHeading="21 Locations to Choose From"
          subHeading="Register today for a location near you!"
        />
      </Container>
    </section>
  );
};

export default WhereSection;
