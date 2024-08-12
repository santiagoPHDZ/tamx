
"use client";

import Image from "next/image";
import { motion } from 'framer-motion';

const Projects = () => {

    return (
        <section className="max-w-6xl px-4 flex flex-col gap-12 w-full justify-center items-center mx-auto">



            <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, stagger: 0.25 }}
            >
                <div className="text-left w-full space-y-4">
                    <h1 className="w-full text-xl md:text-2xl font-semibold text-left">
                        Proyectos
                    </h1>
                    <p className=" md:text-lg font-light text-muted-foreground ">
                        Descubre algunos de nuestros proyectos más recientes que destacan por su innovación y calidad.
                    </p>
                </div>
            </motion.div>

            <div className="gap-4 columns-2 md:columns-2 lg:columns-3">
                {
                    Array.from(Array(13).keys()).map((g, i) => (
                        <motion.div
                            key={i}
                            className="grayscale hover:grayscale-0"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, stagger: 0.25 }}
                        >
                            <Image src={`/gallery/${i}.webp`} alt={"image"} width={0} height={0} quality={100} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="mb-4 w-full h-auto" />
                        </motion.div>
                    ))
                }
            </div>
        </section>
    )

}

export default Projects;