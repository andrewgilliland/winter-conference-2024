import Divider from "./Divider";

type DividerHeaderProps = {
  text: String;
};

const DividerHeader = ({ text }: DividerHeaderProps) => {
  return (
    <div className="flex items-center gap-2.5">
      <Divider />
      <h3 className="font-montserrat font-bold text-lg text-white text-center uppercase max-w-[196px]">
        {text}
      </h3>
      <Divider />
    </div>
  );
};

export default DividerHeader;
