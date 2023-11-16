import Link from "next/link";
import ArrowUpRightFromSquare from "./svgs/ArrowUpRightFromSquare";

type ButtonLinkProps = {
  backgroundColor?: string;
  text?: string;
  href?: string;
};

const ButtonLink = ({
  backgroundColor = "bg-gray-800",
  text = "Register for Winter Conference",
  href = "/register",
}: ButtonLinkProps) => {
  return (
    <Link href={href} className="relative">
      <div>
        <div className="absolute border-2 border-white w-full h-full" />
        <button
          className={`${backgroundColor} border-2 border-white px-3 md:px-[22px] py-2.5 max-w-[375px] transform transition-transform hover:-translate-x-1 hover:-translate-y-1 focus:outline-none focus:ring focus:ring-green-300`}
          aria-label="Register"
        >
          <div className="flex justify-center items-center">
            <div className="font-montserrat font-bold text-base text-white md:text-lg mr-1.5">
              {text}
            </div>
            <ArrowUpRightFromSquare />
          </div>
        </button>
      </div>
    </Link>
  );
};

export default ButtonLink;
