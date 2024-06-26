import "../../app/style/style.effect.css";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  FilePenIcon,
  LightbulbIcon,
  MailIcon,
  MenuIcon,
  ScissorsIcon,
  ShareIcon,
} from "lucide-react";
import { RevealList, RevealWrapper } from "next-reveal";
import { useEffect } from "react";

export function Navbar() {

  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = document.getElementById("navbar-scroll");

    if (!navbar) return; // Early return if navbar is null

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        navbar.classList.remove("hidden");
        navbar.classList.add("visible");
        navbar.classList.add("appear");
        return;
      }

      if (currentScroll > lastScrollTop) {
        // Scroll down
        navbar.classList.add("hidden");
        navbar.classList.remove("visible");
        navbar.classList.remove("appear");
      } else {
        // Scroll up
        navbar.classList.add("visible");
        navbar.classList.remove("hidden");
        navbar.classList.add("appear");
      }
      lastScrollTop = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex w-full max-w-[900px] mx-auto">

      <div className="md:pt-14 top-0 left-0 max-w-[1060px] w-full mx-auto transition-all duration-300 ease-in-out will-change-transform">
        <header className="bg-[#333333] rounded-sm md:rounded-xl text-white container flex h-16 items-center justify-between md:justify-between px-4 md:px-6">
          <Link href="#" className="flex pr-6 items-center gap-2 font-bold" prefetch={false}>
            <Image src="/logo.png" width={60} height={60} alt="Logo" />
            <h1 className="FontName uppercase">Exposure</h1>
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="hidden md:flex items-center gap-[5px]">
            <Link href="#" className="flex hover:border p-2 border-none duration-300 rounded-xl hover:bg-gray-600 text-[2px] items-center gap-4 font-medium" prefetch={false}>
              <LightbulbIcon className="h-4 w-4" />
              Ideación
            </Link>
            <Link href="#" className="flex hover:border p-2 border-none duration-300 rounded-xl hover:bg-gray-600 text-[2px] items-center gap-4 font-medium" prefetch={false}>
              <FilePenIcon className="h-4 w-4" />
              Contenido
            </Link>
            <Link href="#" className="flex hover:border p-2 border-none duration-300 rounded-xl hover:bg-gray-600 text-[2px] items-center gap-4 font-medium" prefetch={false}>
              <ScissorsIcon className="h-4 w-4" />
              Edición
            </Link>
            <Link href="#" className="flex hover:border p-2 border-none duration-300 rounded-xl hover:bg-gray-600 text-[2px] items-center gap-4 font-medium" prefetch={false}>
              <ShareIcon className="h-4 w-4" />
              Distribución
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white rounded-full md:hidden">
                <MenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-[#27282B]">
              <div className="flex h-screen flex-col justify-between p-6">
                <nav className="grid gap-6">
                  <Link href="#" className="flex linked items-center gap-4 text-2xl font-medium" prefetch={false}>
                    <LightbulbIcon className="h-4 w-4" />
                    Ideación
                  </Link>
                  <Link href="#" className="flex linked items-center gap-4 text-2xl font-medium" prefetch={false}>
                    <FilePenIcon className="h-4 w-4" />
                    Contenido
                  </Link>
                  <Link href="#" className="flex linked items-center gap-4 text-2xl font-medium" prefetch={false}>
                    <ScissorsIcon className="h-4 w-4" />
                    Edición
                  </Link>
                  <Link href="#" className="flex linked items-center gap-4 text-2xl font-medium" prefetch={false}>
                    <ShareIcon className="h-4 w-4" />
                    Distribución
                  </Link>
                  <Link href="/Contact" className="flex linked items-center gap-4 text-2xl font-medium" prefetch={false}>
                    <MailIcon className="h-4 w-4" />
                    Contacto
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </div>
  );
}
