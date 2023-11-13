import ArrowUpRightFromSquare from "./ArrowUpRightFromSquare";

const ButtonLink = () => {
  return (
    <div className="relative">
      <div className="absolute border-2 border-white w-full h-full bottom-0" />
      <button className="bg-gray-800 border-2 border-white px-[22px] py-2.5 max-w-[375px] transform transition-transform hover:-translate-x-1 hover:-translate-y-1">
        <div className="flex justify-center items-center">
          <div className="font-montserrat font-bold text-base md:text-lg mr-1.5">
            Register for Winter Conference
          </div>
          <ArrowUpRightFromSquare />
        </div>
      </button>
    </div>
  );
};

export default ButtonLink;
