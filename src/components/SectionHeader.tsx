import DividerHeader from "./DividerHeader";

type SectionHeaderProps = {
  className?: string;
  dividerHeading: string;
  mainHeading: string;
  subHeading: string;
};

const SectionHeader = ({
  className,
  dividerHeading,
  mainHeading,
  subHeading,
}: SectionHeaderProps) => {
  return (
    <div className={`flex flex-col items-center gap-2 w-full ${className}`}>
      <DividerHeader text={dividerHeading} />
      <h2 className="font-montserrat font-bold leading-9 text-3xl md:text-4xl xl:text-5xl text-white text-center">
        {mainHeading}
      </h2>
      <p className="font-montserrat font-medium text-xl md:text-2xl xl:text-3xl max-w-[528px] xl:max-w-[700px] text-green-200 text-center">
        {subHeading}
      </p>
    </div>
  );
};

export default SectionHeader;
