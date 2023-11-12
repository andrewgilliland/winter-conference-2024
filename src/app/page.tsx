import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <h2 className="font-montserrat text-green-300 text-4xl">
          Experience the event that will change the way you farm.
        </h2>
      </section>
      <section>
        <h2>The Biggest Event in Precision Ag</h2>

        <p className="font-roboto">
          Engineers, agronomists, and product experts will share insights
          focused on improving farm operations with solutions for every season.
        </p>
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
