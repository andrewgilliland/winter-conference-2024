import Image, { StaticImageData } from "next/image";

type MediaCardProps = {
  image: StaticImageData;
  imageAlt: string;
  heading: string;
  copy: string;
};

const MediaCard = ({ image, imageAlt, heading, copy }: MediaCardProps) => {
  return (
    <div className="flex flex-col lg:flex-row items-center border border-red-500">
      <Image
        className="lg:flex-1"
        height={350}
        src={image}
        alt={imageAlt}
        placeholder="blur"
      />
      <div className="flex flex-col lg:flex-1 bg-gray-700 border-b-8 lg:border-b-0 lg:border-r-8 border-green-300 mx-4 md:mx-8 lg:mx-0 -mt-9 lg:mt-0 lg:-ml-9 pt-4 px-6 pb-9 gap-2">
        <h4 className="font-montserrat font-bold text-xl text-white">
          {heading}
        </h4>
        <p className="font-roboto text-lg">{copy}</p>
      </div>
    </div>
  );
};

export default MediaCard;
