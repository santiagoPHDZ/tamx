import MainProject from "@/components/landing/main-project"
import Projects from "@/components/landing/projects"
import Image from "next/image"

const Page = async () => {

    return (
        <div className="flex flex-col w-full mx-auto space-y-12 overflow-hidden items-center justify-center pb-12">

            <MainProject />

            <Projects />

        </div >
    )
}

export default Page