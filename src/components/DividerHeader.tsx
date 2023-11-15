import Divider from "./Divider";

type DividerHeaderProps = {
  text: String;
};

const DividerHeader = ({ text }: DividerHeaderProps) => {
  return (
    <div className="flex items-center gap-2.5 w-full">
      <Divider />
      <h3 className="font-montserrat font-bold text-lg md:text-xl text-white text-center uppercase max-w-[164px] md:max-w-none lg:max-w-none">
        {text}
      </h3>
      <Divider />
    </div>
  );
};

export default DividerHeader;
