
"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import { AspectRatio } from "../ui/aspect-ratio";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const MainProject = () => {

    return (
        <section className="t-4 relative max-w-6xl x-4 flex flex-col gap-12 w-full justify-center items-center mx-auto">

            <AspectRatio ratio={16 / 9} className="rounded-none w-full ">
                <Image
                    src={`/landing.jpg`}
                    fill
                    alt="Image"
                    className="object-cover rounded-none w-full"
                />
            </AspectRatio>

            <div className="rounded-none  absolute inset-0 bg-gradient-to-t to-black/10 from-black/90 w-full"></div>

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
                    <div className="w-full space-y-1 md:space-y-2">
                        <h2 className="text-primary md:text-xl font-medium">
                            Conoce los exclusivos
                        </h2>
                        <h1 className="text-primary md:text-5xl text-2xl font-bold">
                            Town houses
                        </h1>
                        <p className="text-white/80 md:text-xl text-sm font-light">
                            Conecta y Cohabita en un lugar lleno de naturaleza, comodidad y lujo.
                        </p>

                        <Link
                            href="https://www.tamx.mx/elrefugio-merida"
                        >
                            <Button variant="outline2" className=" mt-4">
                            Conoce el desarrollo
                            <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                        </Link>
                       
                    </div>
                </div>
            </div>
        </section>
    )

}

export default MainProject;