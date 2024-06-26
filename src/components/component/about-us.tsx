import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import "../../app/style/style.effect.css"
export function AboutUs() {
  return (
    <section className="flex w-full justify-center mx-auto items-center h-[400px]">
      <Card className="bg-[#191919] rounded-lg shadow-md w-full max-w-[740px] h-[200px] ">
        <CardHeader className="text-center flex gap-10 mt-2 items-center justify-end">
          <CardTitle className="text-6xl tracking-tight text-[#ffffff] font-light">Quienes <span className="font-extrabold">somos?</span></CardTitle>
          <CardDescription className="SubTitle text-muted-foreground ">
            This is a simple card with a title and subtitle.
          </CardDescription>
        </CardHeader>
      </Card>
    </section>
  )
}
