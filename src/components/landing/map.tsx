
"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import { AspectRatio } from "../ui/aspect-ratio";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

const Map = () => {

    return (
        <section className="max-w-6xl px-4 flex flex-col gap-4 w-full justify-center items-center mx-auto">

            <motion.div
                className="w-full flex flex-col gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, stagger: 0.25 }}
            >


                <div className="relative flex w-full group">

                    <AspectRatio ratio={16 / 9} className="rounded-none w-full overflow-hidden">
                        <Image
                            src={`/map.png`}
                            height={1080}
                            width={1920}
                            alt="Image"
                            className={cn("object-cover w-full h-full rounded-lg transform transition-transform duration-500 ease-in-out group-hover:scale-105")}

                        />
                    </AspectRatio>

                    <div className="absolute inset-0 bg-background/30 rounded-lg"></div>

                </div>

                <div className="text-left w-full">
                    <p className=" md:text-base font-light text-muted-foreground ">
                        Mapa de las ciudades donde hemos desarrollado proyectos.
                    </p>
                </div>

                <Link
                    href="/projects"
                >
                    <Button variant="outline">
                        <ArrowUpRight className="h-5 w-5 mr-1" /> Descubre Nuestros Proyectos
                    </Button>
                </Link>

            </motion.div>
        </section>
    )

}

export default Map;