
// "use client"

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
// import { Input } from "../ui/input";
// import { Button } from "../ui/button";
// import { HStack, VStack } from "../stack";
// import { useContext } from "react";
// import { contactSchema } from "@/lib/schemas/contact";
// import { Text } from "../text";
// import { Separator } from "../ui/separator";

// interface PageProps {

// }

// const ContactForm = ({ }: PageProps) => {

//     const form = useForm<z.infer<typeof contactSchema>>({
//         resolver: zodResolver(contactSchema)
//     })

//     async function onSubmit(data: z.infer<typeof contactSchema>) {

//     }

//     return (
//         <>
//             <Separator />

//             <div className="w-full grid md:grid-cols-2 gap-8 pb-16">

//                 <VStack className="space-y-4">
//                     <Text level={2} className="text-xl font-bold">
//                         Taller de Arquitectura Mexicana S.A. de C.V.
//                     </Text>

//                     <Text level={0} className="text-base font-normal text-muted-foreground">
//                         Av Campestre 271
//                         <br />
//                         Fracc. Campestre
//                         <br />
//                         CP. 97120
//                         <br />
//                         Mérida Yucatán.
//                     </Text>

//                     <Text level={0} className="text-base font-normal text-muted-foreground">
//                         Tel. 999 242 00 94
//                         <br />
//                         Email. m-padilla-s@hotmail.com
//                     </Text>
//                 </VStack>


//                 <Form {...form}>
//                     <form onSubmit={form.handleSubmit(onSubmit)} className="felx flex-col space-y-4" >

//                         <FormField
//                             control={form.control}
//                             name="name"
//                             render={({ field }) => (
//                                 <FormItem>
//                                     <FormLabel>Nombre</FormLabel>
//                                     <FormControl>
//                                         <Input
//                                             className=" text-base"
//                                             placeholder="Nombre"
//                                             {...field}
//                                         />
//                                     </FormControl>
//                                     <FormMessage />
//                                 </FormItem>
//                             )}
//                         />

//                         <FormField
//                             control={form.control}
//                             name="number"
//                             render={({ field }) => (
//                                 <FormItem>
//                                     <FormLabel>Número de teléfono</FormLabel>
//                                     <FormControl>
//                                         <Input
//                                             className=" text-base"
//                                             placeholder="Número de teléfono"
//                                             type="number"
//                                             {...field}
//                                         />
//                                     </FormControl>
//                                     <FormMessage />
//                                 </FormItem>
//                             )}
//                         />

//                         <HStack className=" justify-between">
//                             <div />
//                             <Button type="submit" >
//                                 Enviar
//                             </Button>
//                         </HStack>
//                     </form>
//                 </Form>
//             </div>
//         </>
//     )
// }

// export default ContactForm;