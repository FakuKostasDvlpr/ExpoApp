import { Hero } from "@/components/component/hero";
import { Navbar } from "@/components/component/navbar";

export default function Home() {
  return (
    <main className="flex flex-col w-full max-w-[1440px] mx-auto">
      <Navbar/>
      <Hero/>
    </main>
  );
}
