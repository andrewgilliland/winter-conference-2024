import SectionHeader from "./SectionHeader";

const WhereSection = () => {
  return (
    <section className="py-10">
      <div className="flex flex-col px-4 gap-12">
        <SectionHeader
          dividerHeading="Where is Wc24?"
          mainHeading="21 Locations to Choose From"
          subHeading="Register today for a location near you!"
        />
      </div>
    </section>
  );
};

export default WhereSection;
