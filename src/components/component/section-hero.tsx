"use client"
import Link from "next/link";
import {Typewriter} from "react-simple-typewriter"
import React from 'react';


export function SectionHero() {
  return (
    <section className="w-full pt-32 bg-transparent">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-4 flex flex-col">
          <h1 className="text-4xl pb-2 font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl">
          Llevamos tus ideas al siguiente nivel
          </h1>
          <p className="text-6xl pb-2 font-bold tracking-tight text-gray-500 sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
          <Typewriter
              loop={true}
              words={["Impacto","Arte","Filmmaking","Edición","Storytelling","Retencion"]}
              cursor={true}
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </p>
          <div className="hidden flex-col md:flex pt-4">
          <p className="max-w-6xl mx-auto text-lg text-primary-foreground/80 md:text-xl lg:text-2xl">
          Nos dedicamos a refinar y amplificar tu presencia en línea con precisión e innovación del
          </p>
          <p className="max-w-6xl mx-auto text-lg text-primary-foreground/80 md:text-xl lg:text-2xl">contenido estratégico para mejorar tus redes sociales. </p>
          </div>
          
          <div className="flex pt-10 justify-center flex-col items-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-md border border-primary-foreground bg-transparent px-8 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
    </section>
  )
}
