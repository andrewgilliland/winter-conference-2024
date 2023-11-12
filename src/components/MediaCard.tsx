import Image, { StaticImageData } from "next/image";

type MediaCardProps = {
  image: StaticImageData;
  imageAlt: string;
  heading: string;
  copy: string;
};

const MediaCard = ({ image, imageAlt, heading, copy }: MediaCardProps) => {
  return (
    <div className="flex flex-col items-center">
      <Image height={350} src={image} alt={imageAlt} />
      <div className="flex flex-col bg-gray-700 border-b-8 border-green-300 mx-4 -mt-10 pt-4 px-6 pb-9 gap-2">
        <h4 className="font-montserrat font-bold text-xl text-white">
          {heading}
        </h4>
        <p className="font-roboto text-lg">{copy}</p>
      </div>
    </div>
  );
};

export default MediaCard;
