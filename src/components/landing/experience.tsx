"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";
import NumberTicker from "../magicui/number-ticker";

import { useRef, useEffect, useState } from "react";

import type { ConfettiRef } from "@/components/magicui/confetti";
import Confetti from "@/components/magicui/confetti";

const Experience = () => {
    const confettiRef = useRef<ConfettiRef>(null);
    const [isMdScreen, setIsMdScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMdScreen(window.innerWidth >= 768); // md breakpoint in Tailwind is 768px
        };

        // Initial check
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="flex flex-col gap-12 w-full justify-center items-center mx-auto">

            <motion.div
                className="w-full bg-accent flex justify-center items-center relative"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, stagger: 0.25 }}
            >

                {isMdScreen ? (
                    <AspectRatio ratio={4 / 1} className="rounded-none w-full">
                        <Image
                            src={`/experience banner.png`}
                            height={500}
                            width={2000}
                            alt="Image"
                            className="object-cover rounded-none w-full"
                        />
                    </AspectRatio>
                ) : (
                    <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden bg-accent w-full">
                        <Image
                            src={`/experience banner.png`}
                            height={500}
                            width={2000}
                            alt="Image"
                            className={"object-cover w-full h-full"}
                        />
                    </AspectRatio>
                )}

                <div className="rounded-none absolute inset-0 bg-background/60 w-full"></div>

                <div className="absolute flex space-x-8 text-center justify-between items-start">
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <h5 className="text-7xl md:text-9xl lg:text-9xl font-black text-white">
                            <NumberTicker value={30} />
                        </h5>
                        <p className="text-base md:text-lg text-white/80">
                            años de experiencia
                        </p>
                    </div>
                </div>

                <Confetti
                    ref={confettiRef}
                    className="absolute left-0 top-0 z-0 w-full size-full"
                    onMouseEnter={() => {
                        confettiRef.current?.fire({});
                    }}
                />
            </motion.div>
        </section>
    );
};

export default Experience;
