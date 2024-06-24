import { Hero } from "@/components/component/hero";
import { Navbar } from "@/components/component/navbar";

export default function Home() {
  return (
    <main className="flex flex-col ">
      <Navbar/>
      <Hero/>
    </main>
  );
}
