
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { apiServer } from "@/trpc/server"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const Page = async () => {

    // const gallery = await apiServer.gallery.getlatest.query()

    return (
        <div className=" flex flex-col w-full ">


            <div className="relative w-full h-[calc(100vh-64px)]">
                <AspectRatio ratio={16 / 9} className="w-full h-[calc(100vh-64px)]">
                    <Image
                        src={`/landing.jpg`}
                        fill
                        alt="Image"
                        className="object-cover rounded-none opacity-50 w-screen h-[calc(100vh-64px)]"
                    />
                </AspectRatio>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="flex space-x-6 w-full items-center justify-center">
                        <div className=" w-32 md:w-56">
                            <Image
                                src={`/elrefugio.webp`} 
                                alt="Image"
                                width={284}
                                height={477}
                            />
                        </div>
                        <div className="w-full space-y-2 md:space-y-4">
                            <h2 className="text-primary md:text-xl font-bold">
                                Conoce los exclusivos
                            </h2>
                            <h1 className="text-primary md:text-5xl text-2xl font-bold">
                                Town houses
                            </h1>
                            <p className="text-muted-foreground md:text-xl text-sm">
                                Conecta y Cohabita en un lugar lleno de naturaleza, comodidad y lujo.
                            </p>
                            <Button variant="outline2" className="relative">
                                Conoce el desarrollo
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Page
