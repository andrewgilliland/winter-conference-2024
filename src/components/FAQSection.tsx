import AccordionItem from "./AccordionItem";
import ChevronCircle from "./ChevronCircle";
import Container from "./Container";
import DividerHeader from "./DividerHeader";

const FAQSection = () => {
  const accordionContent = [
    {
      heading: "When and where is Winter Conference?",
      copy: "Winter Conference 2024 will be held the week of January 16, 2024 at our Tremont, IL headquarters and in many remote locations as well!",
    },
    {
      heading: "What can I expect at Winter Conference?",
      copy: "During each session, we share what we have been learning as a company over the last year that will bring value to your farming operation and helpful tips for you as you evaluate your current farm equipment. We also share new technologies, product updates, as well as the latest insights from our Precision Technology Institute Farm. There’s content for anyone! Plus, get time between sessions and over lunch to connect with passionate farmers like you from your area and around the world!",
    },
    {
      heading: "What is a Winter Conference remote location?",
      copy: "Remote locations offer live face-to-face sessions with Precision Planting employees and experts discussing the unique challenges you face where you farm. They also feature recorded sessions from our Tremont location, so you don't miss any exciting news and teachings from the main stage!",
    },
    {
      heading: "What does it cost?",
      copy: "All of our events are free to attend. Plus, enjoy a light breakfast and free lunch on us!",
    },
    {
      heading: "I have more questions.",
      copy: (
        <span>
          We're happy to chat! Reach out to our team at{" "}
          <a
            className="text-green-200"
            href="mailto:events@precisionplanting.com"
          >
            events@precisionplanting.com
          </a>
          .
        </span>
      ),
    },
  ];

  return (
    <section className="bg-green-800 py-12">
      <Container>
        <DividerHeader text="Frequently Asked Questions" />
        <div className="border-t border-black border-opacity-[33%] ">
          {accordionContent.map(({ heading, copy }) => (
            <AccordionItem heading={heading} copy={copy} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
