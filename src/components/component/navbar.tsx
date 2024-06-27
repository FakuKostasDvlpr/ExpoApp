import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
  FilePenIcon,
  LightbulbIcon,
  MailIcon,
  MenuIcon,
  ScissorsIcon,
  ShareIcon,
} from 'lucide-react';

export function Navbar() {
  // Array de elementos del menú
  const menuItems = [
    { text: 'Ideación' },
    { text: 'Contenido' },
    { text: 'Edición' },
    { text: 'Distribución' },
  ];

  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar-scroll');

    if (!navbar) return;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        navbar.classList.remove('hidden');
        navbar.classList.add('visible');
        navbar.classList.add('appear');
        return;
      }

      if (currentScroll > lastScrollTop) {
        navbar.classList.add('hidden');
        navbar.classList.remove('visible');
        navbar.classList.remove('appear');
      } else {
        navbar.classList.add('visible');
        navbar.classList.remove('hidden');
        navbar.classList.add('appear');
      }
      lastScrollTop = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex w-full max-w-[900px] mx-auto ">
      <div className="md:pt-5 top-0 left-0 max-w-[1060px] w-full mx-auto transition-all duration-300 ease-in-out will-change-transform">
        <header className="bg-[#333333] rounded-sm md:rounded-xl text-white container flex h-16 items-center justify-between md:justify-between px-4 md:px-6">
          <Link href="#" className="flex pr-6 items-center gap-2 font-bold" prefetch={false}>
            <Image src="/logo.png" width={60} height={60} alt="Logo" />
            <h1 className="FontName uppercase">Exposure</h1>
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="hidden md:flex items-center gap-5">
            {menuItems.map((item, index) => (
              <Link key={index} className="flex hover:border p-2 border-none duration-300 rounded-xl hover:bg-gray-600 text-[2px] items-center gap-4 font-medium" prefetch={false} href={'#'}>
                
                {item.text}
              </Link>
            ))}
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
                  {menuItems.map((item, index) => (
                    <Link key={index} href={'#'} className="flex linked items-center gap-4 text-2xl font-medium" prefetch={false}>
                      {item.text}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </div>
  );
}
