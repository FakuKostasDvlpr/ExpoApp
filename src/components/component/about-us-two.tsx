import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import "../../app/style/style.effect.css";

export function AboutUsTwo() {
  return (
    <section className="flex w-full justify-center mx-auto items-center">
      <Card className="bg-[#191919] rounded-lg shadow-md w-full max-w-[840px]">
        <CardHeader className="text-center flex gap-10 mt-2 items-center justify-end">
          <CardTitle className="text-6xl tracking-tight text-[#ffffff] font-light">
            Quienes <span className="font-extrabold">somos?</span>
          </CardTitle>
          <CardDescription className="SubTitle text-muted-foreground text-center mt-4 max-w-[600px]">
            Exposure stands as a beacon in the realm of social media enhancement,
            dedicated to refining and amplifying online identities. With a commitment
            to precision and innovation, we specialize in tailoring comprehensive strategies
            for individuals and businesses seeking to navigate the intricate landscape
            of digital connectivity.
          </CardDescription>
        </CardHeader>
      </Card>
    </section>
  );
}
