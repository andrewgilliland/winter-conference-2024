import WhatSection from "@/components/sections/WhatSection";
import HeroSection from "@/components/sections/HeroSection";
import WhereSection from "@/components/sections/WhereSection";
import FAQSection from "@/components/sections/FAQSection";

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
