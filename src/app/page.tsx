import Image from "next/image";
import DividerHeader from "../components/DividerHeader";
import SectionHeader from "@/components/SectionHeader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section>
        <h2 className="font-montserrat text-green-300 text-4xl">
          Experience the event that will change the way you farm.
        </h2>
      </section>

      <section className="bg-gray-800 py-12">
        <div className="px-4">
          <SectionHeader
            dividerHeading="What is Winter conference?"
            mainHeading="The Biggest Event in Precision Ag"
            subHeading="Precision Planting's annual event attended by over 4,500 farmers globally."
          />

          <p className="font-roboto">
            Engineers, agronomists, and product experts will share insights
            focused on improving farm operations with solutions for every
            season.
          </p>
        </div>
      </section>

      <section>
        <h2>21 Locations to Choose From</h2>
      </section>
      <section>
        <h2>Frequently Asked Questions</h2>
      </section>
    </main>
  );
}
