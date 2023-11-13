import DividerHeader from "./DividerHeader";

type SectionHeaderProps = {
  dividerHeading: string;
  mainHeading: string;
  subHeading: string;
};

const SectionHeader = ({
  dividerHeading,
  mainHeading,
  subHeading,
}: SectionHeaderProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <DividerHeader text={dividerHeading} />
      <h2 className="font-montserrat font-bold leading-9 text-[30px] text-white text-center">
        {mainHeading}
      </h2>
      <p className="font-montserrat font-medium text-xl text-green-200 text-center">
        {subHeading}
      </p>
    </div>
  );
};

export default SectionHeader;
