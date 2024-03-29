import ContactForm from "@/components/forms/contact-form"
import { VStack } from "@/components/stack"
import { Text } from "@/components/text"
import { apiServer } from "@/trpc/server"
import Image from "next/image"

const Page = async () => {

    // const gallery = await apiServer.gallery.getlatest.query()

    return (
        <VStack className="px-4 md:px-12 space-y-8 pt-4">

            {/* <VStack className="text-left space-y-2 w-2/3">
                <Text level={1} className="text-4xl md:text-6xl lg:text-7xl font-black">
                    Taller de Arquitectura Mexicana
                </Text>
                <Text level={2} className=" md:text-lg font-light text-muted-foreground leading-relaxed">
                    Somos un despacho de Arquitectos que nos enfocamos en cubrir las necesidades de nuestros clientes con un enfoque de satisfacción total.
                </Text>
            </VStack> */}

            <div className="gap-4 columns-2 md:columns-2 lg:columns-3">
                {
                    Array.from(Array(13).keys()).map((g, i) => (
                        <div key={i} className="grayscale hover:grayscale-0">
                            <Image src={`/gallery/${i}.webp`} alt={"image"} width={0} height={0} quality={100} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="mb-4 w-full h-auto" />
                        </div>
                    ))
                }
            </div>

            <ContactForm />
        </VStack>
    )
}

export default Page
