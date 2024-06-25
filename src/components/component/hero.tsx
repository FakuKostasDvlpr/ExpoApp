import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col mx-auto">
          <div className="flex flex-col space-y-4 text">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            En Exposure, llevamos tus ideas al siguiente nivel.
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              We are a content creation agency that specializes in taking ideas from ideation and strategy through to
              distribution on various platforms. Our focus is on creating viral video content that reflects your brand
              identity and exceeds quality expectations.
            </p>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Our team of passionate creatives is dedicated to crafting impactful content that connects with your
              audience in a meaningful way. From professional editing to strategic distribution, we&apos;re here to help you
              amplify your message and achieve your marketing goals.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1></h1>
          </div>
        </div>
      </div>
    </section>
  );
}
