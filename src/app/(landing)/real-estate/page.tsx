
import { VStack } from "@/components/stack";
import { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
    title: 'Grupo TAMX',
    description: 'We build homes',
}

interface PageProps {

}

const Page = async ({ }: PageProps) => {

    return (
        <VStack className="px-4">
            Real State
        </VStack>
    )
}

export default Page;