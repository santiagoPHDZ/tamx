
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import Image from "next/image";
import { motion } from 'framer-motion';
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";
import Link from "next/link";
import { useToast } from "../ui/use-toast";
import { contactSchema } from "@/lib/schemas/contact";
import { Textarea } from "../ui/textarea";
import { apiClient } from "@/trpc/trpc-provider";
import { ArrowUpRight } from "lucide-react";

const ContactUsForm = () => {

    const { toast } = useToast()

    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema)
    })

    async function onSubmit(data: z.infer<typeof contactSchema>) {
        mutate(data)
    }

    const { mutate, isLoading } = apiClient.contact.create.useMutation({
        onSuccess: () => {
            toast({
                title: "Gracias!",
                description: "Nos pondremos en contacto contigo pronto."
            })
        }
    })

    return (
        <section className="max-w-6xl px-4 flex flex-col gap-12 pb-12 w-full justify-center items-center mx-auto">

            <motion.div
                className="w-full flex flex-col items-center overflow-hidden p-4 rounded-lg bg-accent border text-left space-y-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, stagger: 0.25 }}
            >

                <div className=" w-full space-y-4">
                    <h1 className="w-full text-xl md:text-2xl font-semibold text-left">
                        Contáctanos
                    </h1>
                    <p className=" md:text-lg font-light text-muted-foreground md:w-2/3">
                        Estamos listos para ayudarte. Contáctanos para más información sobre nuestros servicios o para comenzar tu próximo proyecto.
                    </p>
                </div>

                <Form {...form} >
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">

                        <FormField
                            control={form.control}
                            name="name"
                            disabled={isLoading}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            disabled={isLoading}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="message"
                            disabled={isLoading}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Message"
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button disabled={isLoading} type="submit" variant="default">
                            <ArrowUpRight className="h-5 w-5 mr-1" />  Submit
                        </Button>

                    </form>
                </Form>
            </motion.div>
        </section>
    )

}

export default ContactUsForm;