import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import DividerHeader from "@/components/DividerHeader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center">
      <Container>
        <div className="flex flex-col items-center gap-12 w-[320px] md:w-[550px]">
          <DividerHeader text="Registration Coming Soon!" />
          <div className="">
            <ButtonLink text="Go Back" href="/" />
          </div>
        </div>
      </Container>
    </main>
  );
}
