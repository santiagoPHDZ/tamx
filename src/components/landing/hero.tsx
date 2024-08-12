
"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import { AspectRatio } from "../ui/aspect-ratio";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {

    return (
        <div className=" relative w-full h-[calc(100vh-64px)]">

            <AspectRatio ratio={16 / 9} className="rounded-none w-full h-[calc(100vh-64px)]">
                <Image
                    src={`/landing.jpg`}
                    fill
                    alt="Image"
                    className="object-cover rounded-none w-screen h-[calc(100vh-64px)]"
                />
            </AspectRatio>

            <div className="rounded-none  absolute inset-0 bg-gradient-to-t to-black/10 from-black/90 w-screen h-[calc(100vh-64px)]"></div>

            <div className="w-full h-[calc(100vh-64px)] absolute bottom-0 left-0 p-4 text-white text-left space-y-2 pb-12 flex items-end justify-center">

                <div className="max-w-6xl  flex flex-col items-start justify-end w-full">
                    
                    <motion.h3
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wider leading-normal"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, stagger: 0.25 }}
                    >

                        <p className=" tracking-wider leading-snug">
                            Diseño Arquitectónico <br /> de Vanguardia
                        </p>
                    </motion.h3>

                    <motion.p
                        className=" text-lg md:text-xl font-light text-white/80 pt-2 md:w-1/2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, stagger: 0.25 }}
                    >
                        Grupo TAM es un despacho de arquitectos líderes en el diseño de espacios innovadores y sostenibles.
                    </motion.p>

                    <motion.div
                        className="w-full pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, stagger: 0.25 }}
                    >
                        <Link
                            href="/projects"
                        >
                            <Button variant="outline">
                                <ArrowUpRight className="h-5 w-5 mr-1" /> Descubre Nuestros Proyectos
                            </Button>
                        </Link>
                    </motion.div>

                </div>

            </div>
        </div>
    )

}

export default Hero;

{/* <div className="max-w-6xl w-full h-[calc(100vh-64px)] flex flex-col items-start justify-end absolute bottom-0 left-0 p-4 text-white text-left space-y-2 pb-12">

                {/* <motion.h3
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wider leading-normal"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, stagger: 0.25 }}
                >

                    <p className=" tracking-wider leading-snug">
                        Diseño Arquitectónico <br /> de Vanguardia
                    </p>
                </motion.h3> 

                <motion.p
                    className=" text-lg md:text-xl font-light text-white/80 pt-2 md:w-1/2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, stagger: 0.25 }}
                >
                    Grupo TAM es un despacho de arquitectos líderes en el diseño de espacios innovadores y sostenibles.
                </motion.p>

                <motion.div
                    className="w-full pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, stagger: 0.25 }}
                >
                    <Link
                        href=""
                    >
                        <Button variant="outline">
                            <ArrowUpRight className="h-5 w-5 mr-1" /> Descubre Nuestros Servicios
                        </Button>
                    </Link>
                </motion.div>

            </div>
            */}