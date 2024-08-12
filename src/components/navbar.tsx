// "use client"

// import Link from "next/link"
// import { Button } from "./ui/button"
// import { Menu, Phone } from "lucide-react"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
// import { ThemeToggle } from "./theme-toggle"
// import { cn } from "@/lib/utils"
// import { usePathname } from "next/navigation"
// import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
// import { ROUTES } from "@/lib/routes"

// const NavBar = () => {

//     const pathname = usePathname()

//     return (
//         <nav className="border-b fixed top-0 z-50 bg-background/60 w-full flex items-center justify-center backdrop-blur-md">

//             <div className="w-full flex items-center justify-between h-16 px-6">

//                 <div className="flex items-center justify-center space-x-6">

// <Link
//     href="/"
// >
//     <h2 className=" text-xl font-normal pr-4 flex">
//         Grupo <span className="ml-1 text-xl font-extrabold">TAMX</span>
//     </h2>
// </Link>

//                     <div className="flex items-center justify-center space-x-6">
//                         {
//                             ROUTES.map((p) => (
//                                 <Link
//                                     key={p.path}
//                                     href={p.path}
//                                 >
//                                     <p className={cn("text-sm font-light hover:border-b hover:text-primary hover:border-primary transition duration-300 ease-in-out", p.path === pathname ? " text-primary" : "text-secondary-foreground/50")}>
//                                         {p.label}
//                                     </p>
//                                 </Link>

//                             ))
//                         }
//                     </div>
//                 </div>

//                 {/* <HStack className="items-center justify-center space-x-4"> */}

//                 {/* <DropdownMenu >
//                             <DropdownMenuTrigger asChild>
//                                 <Button variant="ghost" size="icon" className=" md:hidden">
//                                     <Menu className="h-6 w-6" />
//                                 </Button>
//                             </DropdownMenuTrigger>
//                             <DropdownMenuContent>
//                                 {
//                                     PAGES.map((p) => (
//                                         <DropdownMenuItem key={p.path}>
//                                             <Link
//                                                 href={p.path}
//                                             >
//                                                 <Text level={4} className="text-sm font-light text-primary">
//                                                     {p.label}
//                                                 </Text>
//                                             </Link>
//                                         </DropdownMenuItem>
//                                     ))
//                                 }
//                             </DropdownMenuContent>
//                         </DropdownMenu> */}
//                 {/* 
//                         <Dialog>
//                             <DialogTrigger asChild>
//                                 <Button variant="ghost" size="icon">
//                                     <Phone className="h-5 w-5" />
//                                 </Button>
//                             </DialogTrigger>
//                             <DialogContent>
//                                 <ContactForm />
//                             </DialogContent>
//                         </Dialog>

//                         <ThemeToggle /> */}
//                 {/* </HStack> */}
//             </div>
//         </nav>
//     )
// }

// export default NavBar

"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { AlignJustify, ArrowUpRight, Linkedin, Mail, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { useState } from "react"
import Image from "next/image"
import { ThemeToggle } from "./theme-toggle"
import { usePathname } from "next/navigation"
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils"

const routes = [
    {
        label: "Proyectos",
        href: "/projects",
    },
]

const developments = [
    {
        label: "El Refugio",
        href: "https://www.tamx.mx/elrefugio-merida",
    },
]


const social = [
    {
        label: "Mail",
        href: "mailto:m-padilla-s@hotmail.com ",
    },
    {
        label: "WhatsApp",
        href: "http://wa.me/529992420094",
    },
]

const NavBar = () => {
    const path = usePathname()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const handleLinkClick = () => {
        setIsSidebarOpen(false)
    }

    return (
        <nav className={cn("fixed top-0 z-50 backdrop-blur-md w-full flex items-center justify-center", isSidebarOpen ? "border-none bg-transparent" : "border-b bg-background/80 ")}>
            <div className="w-full flex items-center justify-between h-14 px-4">
                <div className="flex items-center justify-center ">
                    <Link
                        href="/"
                    >
                        <h2 className=" text-xl font-normal pr-4 flex">
                            Grupo <span className="ml-1 text-xl font-extrabold">TAM</span>
                        </h2>
                    </Link>
                </div>

                <div className="  flex space-x-3 pt-2">
                    {/* <ThemeToggle /> */}

                    <Sheet onOpenChange={setIsSidebarOpen} open={isSidebarOpen}>
                        <SheetTrigger asChild className="">
                            <>
                                {
                                    !isSidebarOpen && (
                                        <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(true)}>
                                            <AlignJustify className="h-[1.2rem] w-[1.2rem]" />
                                        </Button>
                                    )
                                }

                                {
                                    isSidebarOpen && (
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className=" "
                                            onClick={() => setIsSidebarOpen(false)}
                                        >
                                            <X className=" h-[1.2rem] w-[1.2rem]" />
                                        </Button>
                                    )
                                }

                            </>
                        </SheetTrigger>
                        <SheetContent className="px-4 flex flex-col justify-between items-center" side="top">
                            <div className="flex flex-col items-center w-full space-y-6">

                                <div className="w-full">
                                    {/* <motion.p
                                        className=" w-full py-2 border-b font-semibold text-sm" initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, stagger: 0.25 }}
                                    >
                                        PROJECTS
                                    </motion.p> */}

                                    <nav className="space-y-2 pt-4 w-full">
                                        {routes.map((route) => (
                                            <motion.div
                                                key={route.href}
                                                className={`ease-in-out transition-colors ${path === route.href ? "text-primary" : "hover:text-primary text-muted-foreground"}`}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, stagger: 0.25 }}
                                            >
                                                <Link href={route.href} className="flex items-center text-base font-light" onClick={handleLinkClick}>
                                                    <ArrowUpRight className="h-5 w-5 mr-1" />
                                                    <p>{route.label}</p>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </nav>
                                </div>

                                <div className="w-full">
                                    <motion.p
                                        className=" w-full py-2 border-b font-semibold text-sm" initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, stagger: 0.25 }}
                                    >
                                        DESAROLLOS
                                    </motion.p>

                                    <nav className="space-y-2 pt-4 w-full">
                                        {developments.map((route) => (
                                            <motion.div
                                                key={route.href}
                                                className={`ease-in-out transition-colors ${path === route.href ? "text-primary" : "hover:text-primary text-muted-foreground"}`}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, stagger: 0.25 }}
                                            >
                                                <Link href={route.href} className="flex items-center text-base font-light" onClick={handleLinkClick}>
                                                    <ArrowUpRight className="h-5 w-5 mr-1" />
                                                    <p>{route.label}</p>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </nav>
                                </div>


                            </div>




                            <div className="space-y-2 pt-8 w-full">
                                {social.map((route) => (
                                    <motion.div
                                        key={route.href}
                                        className={`ease-in-out transition-colors ${path === route.href ? "text-primary" : "hover:text-primary text-muted-foreground"}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, stagger: 0.25 }}
                                    >
                                        <Link target="_blank" href={route.href} className="flex items-center text-base font-light" onClick={handleLinkClick}>
                                            <ArrowUpRight className="h-5 w-5 mr-1" />
                                            <p>{route.label}</p>
                                        </Link>
                                    </motion.div>
                                ))}

                                {/* <motion.div
                                    className="w-full pt-2"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, stagger: 0.25 }}
                                >
                                    <Link
                                        href="https://www.santiagopadilla.com/"
                                        target="_blank"
                                        className="w-full"
                                    >
                                        <div className=" border w-full bg-accent rounded-lg p-2 flex flex-col items-center justify-start">
                                            <div className=" w-full flex items-center justify-start">
                                                <Image
                                                    src="/user.jpeg"
                                                    width={112}
                                                    height={112}
                                                    alt="Profile Image"
                                                    className="object-cover rounded-lg aspect-square h-12 w-12 "
                                                />

                                                <div className=" flex flex-col ml-4">

                                                    <h5 className="font-medium mb-1">
                                                        Santiago Padilla
                                                    </h5>

                                                    <p className="text-muted-foreground text-sm">
                                                        me@santiagopadilla.com
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div> */}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
