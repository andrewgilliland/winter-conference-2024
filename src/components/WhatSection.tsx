import SectionHeader from "./SectionHeader";
import MediaCard from "./MediaCard";
import webster1 from "../../public/webster-1.jpg";
import webster2 from "../../public/webster-2.jpg";
import audience1 from "../../public/audience-1.jpg";
import connect1 from "../../public/connect-1.jpg";
import ArrowUpRightFromSquare from "./ArrowUpRightFromSquare";
import ButtonLink from "./ButtonLink";

const WhatSection = () => {
  const mediaItems = [
    {
      image: webster1,
      imageAlt: "Jason Webster telling farmers what's up.",
      heading: "Hear from AgTech Leaders",
      copy: "Engineers, agronomists, and product experts will share insights focused on improving farm operations with solutions for every season.",
    },
    {
      image: audience1,
      imageAlt: "Man taking notes during conference talk.",
      heading: "Eliminate Challenges",
      copy: "Learn strategies and techniques that you can implement immediately on your farm. Plus, experience demonstrations and opportunities to see the latest Precision Planting technologies.",
    },
    {
      image: connect1,
      imageAlt: "Men having conversation at conference.",
      heading: "Connect With Other Farmers",
      copy: "Best of all, talk to Precision Planting employees and dealers at all locations and connect with other farmers. This day is truly focused on you and the future of your farm.",
    },
  ];

  return (
    <section className="bg-gray-800 py-12 md:py-16">
      <div className="flex flex-col items-center px-4 md:px-0 mx-auto max-w-[640px] lg:max-w-[768px] gap-8 md:gap-12 border border-purple-500">
        <SectionHeader
          dividerHeading="What is Winter conference?"
          mainHeading="The Biggest Event in Precision Ag"
          subHeading="Precision Planting's annual event attended by over 4,500 farmers globally."
        />

        <div className="flex flex-col gap-10">
          {mediaItems.map(({ image, imageAlt, heading, copy }, index) => (
            <MediaCard
              key={index}
              image={image}
              imageAlt={imageAlt}
              heading={heading}
              copy={copy}
            />
          ))}
        </div>

        <ButtonLink />
      </div>
    </section>
  );
};

export default WhatSection;
