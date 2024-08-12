
"use client";

import Image from "next/image";
import { motion } from 'framer-motion';

const Mission = () => {

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
                        Nuestra Misión
                    </h1>
                    <p className=" md:text-lg font-light text-muted-foreground ">
                        En Grupo TAM, nuestra misión es crear espacios arquitectónicos excepcionales que superen las expectativas de nuestros clientes. Con más de 30 años de experiencia, nos enfocamos en la innovación, la calidad y la <span className=" font-semibold">satisfacción total del cliente</span>.
                    </p>
                </div>
            </motion.div>
        </section>
    )

}

export default Mission;