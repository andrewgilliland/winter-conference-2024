import Image, { StaticImageData } from "next/image";

type MediaCardProps = {
  image: StaticImageData;
  imageMd: StaticImageData;
  imageAlt: string;
  heading: string;
  copy: string;
  index: number;
};

const MediaCard = ({
  image,
  imageMd,
  imageAlt,
  heading,
  copy,
  index,
}: MediaCardProps) => {
  const isEven = index % 2 === 0 ? true : false;

  return (
    <div
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }  items-center`}
    >
      <Image
        className="md:hidden lg:flex-1"
        height={350}
        src={image}
        alt={imageAlt}
        placeholder="blur"
      />
      <Image
        className="hidden md:block"
        src={imageMd}
        alt={imageAlt}
        placeholder="blur"
      />
      <div
        className={`flex flex-col lg:flex-1 bg-gray-700 border-b-8 lg:border-b-0 ${
          isEven ? "lg:border-r-8 lg:-ml-9" : "lg:border-l-8 lg:-mr-9 z-10"
        } border-green-300 mx-4 md:mx-8 lg:mx-0 -mt-9 lg:mt-0  pt-4 px-6 pb-9 gap-2`}
      >
        <h4 className="font-montserrat font-bold text-xl text-white">
          {heading}
        </h4>
        <p className="font-roboto text-lg">{copy}</p>
      </div>
    </div>
  );
};

export default MediaCard;
