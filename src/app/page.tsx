import dynamic from "next/dynamic";
import WhatSection from "@/components/WhatSection";
import HeroSection from "@/components/HeroSection";
import WhereSection from "@/components/WhereSection";
import FAQSection from "@/components/FAQSection";

// const HeroSection = dynamic(() => import("../components/HeroSection"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <WhatSection />
      <WhereSection />
      <FAQSection />
    </main>
  );
}
