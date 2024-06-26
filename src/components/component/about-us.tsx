import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function AboutUs() {
  return (
    <section className="flex w-full justify-center mx-auto items-center h-[400px]">
      <Card className="bg-white rounded-lg shadow-md w-full max-w-[900px] ">
        <CardHeader className="text-center">
          <CardTitle className="text-6xl font-bold">Quienes somos?</CardTitle>
          <CardDescription className="text-muted-foreground ">
            This is a simple card with a title and subtitle.
          </CardDescription>
        </CardHeader>
      </Card>
    </section>
  )
}
