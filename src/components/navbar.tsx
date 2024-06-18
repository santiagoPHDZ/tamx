"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { Menu, Phone } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { ROUTES } from "@/lib/routes"

const NavBar = () => {

    const pathname = usePathname()

    return (
        <nav className="border-b fixed top-0 z-50 bg-background/60 w-full flex items-center justify-center backdrop-blur-md">

            <div className="w-full flex items-center justify-between h-16 px-6">

                <div className="flex items-center justify-center space-x-6">
                    <Link
                        href="/"
                    >
                        <h2 className=" text-xl font-normal pr-4 flex">
                             <span className="ml-1 text-xl font-extrabold">TAMX</span>
                        </h2>
                    </Link>

                    <div className="flex items-center justify-center space-x-6">
                        {
                            ROUTES.map((p) => (
                                <Link
                                    key={p.path}
                                    href={p.path}
                                >
                                    <p className={cn("text-sm font-light hover:border-b hover:text-primary hover:border-primary transition duration-300 ease-in-out", p.path === pathname ? " text-primary" : "text-secondary-foreground/50")}>
                                        {p.label}
                                    </p>
                                </Link>

                            ))
                        }
                    </div>
                </div>

                {/* <HStack className="items-center justify-center space-x-4"> */}

                {/* <DropdownMenu >
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className=" md:hidden">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {
                                    PAGES.map((p) => (
                                        <DropdownMenuItem key={p.path}>
                                            <Link
                                                href={p.path}
                                            >
                                                <Text level={4} className="text-sm font-light text-primary">
                                                    {p.label}
                                                </Text>
                                            </Link>
                                        </DropdownMenuItem>
                                    ))
                                }
                            </DropdownMenuContent>
                        </DropdownMenu> */}
                {/* 
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Phone className="h-5 w-5" />
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <ContactForm />
                            </DialogContent>
                        </Dialog>

                        <ThemeToggle /> */}
                {/* </HStack> */}
            </div>
        </nav>
    )
}

export default NavBar