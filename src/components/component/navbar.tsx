import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { FilePenIcon, LightbulbIcon, MailIcon, MenuIcon, ScissorsIcon, ShareIcon } from "lucide-react"
import "../../app/style/style.effect.css"
export function Navbar() {
  return (
    <div className="  ">
      <div className="pt-8 top-0 left-0  max-w-[860px] w-full mx-auto  transition-all duration-300 ease-in-out will-change-transform">
        <header className="bg-black rounded-xl text-white container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2 font-bold" prefetch={false}>
            <img src="/logo.png" width={60}></img>
            <h1>Exposure</h1>
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="flex text-1xl  items-center gap-4 text-base font-medium" prefetch={false}>
              <LightbulbIcon className="h-4 w-4" />
              Ideación
            </Link>
            <Link href="#" className="flex text-1xl  items-center gap-4 text-base font-medium" prefetch={false}>
              <FilePenIcon className="h-4 w-4" />
              Contenido
            </Link>
            <Link href="#" className="flex text-1xl  items-center gap-4 text-base font-medium" prefetch={false}>
              <ScissorsIcon className="h-4 w-4" />
              Edición
            </Link>
            <Link href="#" className="flex text-1xl  items-center gap-4 text-base font-medium" prefetch={false}>
              <ShareIcon className="h-4 w-4" />
              Distribución
            </Link>
          </nav>
          <Sheet >
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full lg:hidden">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-background">
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
  )
}