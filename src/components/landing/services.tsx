
"use client";

import Image from "next/image";
import { motion } from 'framer-motion';


const services = [
    {
        header: "Diseño Arquitectónico",
        description: "Creamos diseños arquitectónicos innovadores y funcionales.",
    },
    {
        header: "Construcción",
        description: "Ejecutamos proyectos de construcción con alta calidad y precisión.",
    },
    {
        header: "Gestión de Proyectos",
        description: "Brindamos servicios de gestión y supervisión de proyectos.",
    },
    {
        header: "Sustentabilidad",
        description: "Incorporamos principios de diseño sostenible en todos nuestros proyectos.",
    },
    // {
    //     header: "Visualización 3D",
    //     description: "Utilizamos tecnologías de vanguardia para crear visualizaciones realistas.",
    // },
]


const Services = () => {

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
                        Nuestros Servicios
                    </h1>
                    <p className=" md:text-lg font-light text-muted-foreground ">
                        Nos especializamos en el diseño y desarrollo de proyectos inmobiliarios residenciales de alta calidad, así como en la comercialización de nuestros productos y de nuestros clientes, casas, departamentos, comercio y terrenos.
                    </p>
                </div>
            </motion.div>

            <div className="w-full grid items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">

                {services.map((service) => (
                    <motion.div
                        key={service.header}
                        className="grid gap-1"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, stagger: 0.25 }}
                    >
                        <h3 className=" text-base md:text-lg font-semibold">
                            {service.header}
                        </h3>
                        <p className="text-base font-light text-muted-foreground">
                            {service.description}
                        </p>
                    </motion.div>
                )
                )

                }

            </div>

        </section>
    )

}

export default Services;