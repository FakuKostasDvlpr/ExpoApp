import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              About Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Crafting Viral Video Content
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
            <Image
              src="/placeholder.svg"
              width={550}
              height={550}
              alt="About Us"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
