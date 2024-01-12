
import ContactForm from "@/components/forms/contact-form";
import { VStack } from "@/components/stack";
import { Text } from "@/components/text";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// Metadata
export const metadata: Metadata = {
    title: 'Grupo TAMX',
    description: 'We build homes',
}

interface PageProps {

}

const Page = async ({ }: PageProps) => {

    return (
        <VStack className="px-4 md:px-12 space-y-8 pt-16">


            <VStack className="text-left space-y-2 w-2/3">
                <Text level={1} className="text-4xl md:text-6xl lg:text-7xl font-black">
                    <span className=" text-blue-500">Asistente Inteligente</span> para el sector <span className=" text-blue-500">Inmobiliario</span>
                </Text>
                <Text level={2} className=" md:text-lg font-light text-muted-foreground leading-relaxed">
                    Nuestro software agiliza la comunicación con respuestas instantáneas y precisas, para lidiar con la creciente demanda de propiedades y la necesidad de brindar respuestas inmediatas a nuestros clientes.
                </Text>
            </VStack>

            <Image src="/software/chat.png" alt='product preview' width={1920} height={1080} quality={100} className="w-full max-w-4xl pb-8" />

            <Link
                href="https://www.brokerai.app/"
                target="_blank"
            >
                <Button variant="secondary" className="w-full max-w-4xl">
                    Más Información
                </Button>
            </Link>

            <ContactForm />
        </VStack>
    )
}

export default Page;