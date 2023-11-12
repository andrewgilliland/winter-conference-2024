import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import winterConference2024Logo from "../../public/WC24_logo-horiz_RGB 1.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="py-16">
        <div className="flex flex-col items-center gap-6 px-8">
          <Image
            src={winterConference2024Logo}
            alt="Winter Conference 2024 Logo"
          />
          <h2 className="font-montserrat text-green-300 text-xl md:text-4xl text-center">
            Experience the event that will change the way you farm.
          </h2>
        </div>
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
