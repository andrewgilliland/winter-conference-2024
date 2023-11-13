import AccordionItem from "./AccordionItem";
import ChevronCircle from "./ChevronCircle";
import DividerHeader from "./DividerHeader";

const FAQSection = () => {
  return (
    <section className="bg-green-800 py-12">
      <div className="flex flex-col px-4 gap-8">
        <DividerHeader text="Frequently Asked Questions" />

        <div className="border-t border-black border-opacity-[33%]">
          <AccordionItem
            heading=" When and where is Winter Conference?"
            copy=" Winter Conference 2024 will be held the week of January 16, 2024 at our
            Tremont, IL headquarters and in many remote locations as well!"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
