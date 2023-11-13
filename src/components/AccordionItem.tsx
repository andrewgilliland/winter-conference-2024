import ChevronCircle from "./ChevronCircle";

type AccordionItemProps = {
  heading: string;
  copy: string;
};

const AccordionItem = ({ heading, copy }: AccordionItemProps) => {
  return (
    <div className="flex flex-col bg-green-900 border-b border-black border-opacity-[33%] px-9 py-8 gap-4">
      <button className="flex">
        <h4 className="font-montserrat font-bold text-xl text-white text-left">
          {heading}
        </h4>
        <ChevronCircle />
      </button>
      <p className="font-roboto text-lg">{copy}</p>
    </div>
  );
};

export default AccordionItem;
