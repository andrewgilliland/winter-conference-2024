"use client";

import { useEffect, useRef, useState } from "react";
import ChevronCircle from "./ChevronCircle";

type AccordionItemProps = {
  heading: string;
  copy: string;
};

const AccordionItem = ({ heading, copy }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [height, setHeight] = useState<number>();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    divRef.current && setHeight(divRef.current.offsetHeight);
  }, []);

  return (
    <div
      className={
        "flex flex-col bg-green-900 border-b border-black border-opacity-[33%] px-9 py-8 gap-4"
      }
    >
      <button
        className="flex justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="font-montserrat font-bold text-xl text-white text-left">
          {heading}
        </h4>
        <div
          className={`w-6 h-6 transform transition-transform rotate-0 ${
            isOpen ? "" : "rotate-180"
          }`}
        >
          <ChevronCircle />
        </div>
      </button>

      <div
        ref={divRef}
        style={{
          height: isOpen ? `${height}px` : "0px",
          overflow: "hidden",
          transition: "all 0.3s ease",
        }}
        className={`overflow-hidden transition-all`}
      >
        <p className={`font-roboto text-lg transform transition-transform `}>
          {copy}
        </p>
      </div>
    </div>
  );
};

export default AccordionItem;
