import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import "../../app/style/style.effect.css"
export function AboutUs() {
  return (
    <section className="flex w-full justify-center mx-auto items-center h-[400px]">
      <Card className="bg-[#191919] rounded-lg shadow-md w-full max-w-[840px] h-[250px] ">
        <CardHeader className="text-center flex gap-10 mt-2 items-center justify-end">
          <CardTitle className="text-6xl tracking-tight text-[#ffffff] font-light">Quienes <span className="font-extrabold">somos?</span></CardTitle>
          <CardDescription className="SubTitle w-full -tracking-tighter max-w-[600px] text-muted-foreground ">
          Exposure stands as a beacon in the realm of social media enhancement,
          dedicated to refining and amplifying online identities. With a commitment
          to precision and innovation, we specialize in tailoring comprehensive
          </CardDescription>
        </CardHeader>
      </Card>
    </section>
  )
}
