"use client"

import Link from "next/link"
import NavbarContainer from "./containers/navbar-container"
import { HStack } from "./stack"
import { Text } from "./text"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const PAGES = [
    {
        label: "Proyectos",
        path: "/projects"
    },
    {
        label: "Constructora",
        path: "/construction"
    },
    {
        label: "Inmuebles",
        path: "/real-estate"
    },
    {
        label: "Materiales & Maquinaria",
        path: "/materials"
    },
    {
        label: "Software",
        path: "/software"
    },
]
const NavBar = () => {

    const pathname = usePathname()

    return (
        <nav>
            <NavbarContainer className="border-b top-0 z-30 bg-background">
                <HStack className="w-full h-14 items-center justify-between">

                    <HStack className="items-center justify-center space-x-6">
                        <Link
                            href="/"
                        >
                            <Text level={1} className=" text-xl font-normal pr-4 flex">
                                Grupo <span className="ml-1 text-xl font-extrabold">TAMX</span>
                            </Text>
                        </Link>

                        <div className="hidden md:flex items-center justify-center space-x-6">
                            {
                                PAGES.map((p) => (
                                    <Link
                                        key={p.path}
                                        href={p.path}
                                    >
                                        <Text level={4} className={cn("text-sm font-light", p.path === pathname ? " text-primary" : "text-secondary-foreground/50")}>
                                            {p.label}
                                        </Text>
                                    </Link>

                                ))
                            }
                        </div>
                    </HStack>

                    <HStack className="items-center justify-center space-x-2">

                        <DropdownMenu >
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
                        </DropdownMenu>

                        <ThemeToggle />
                    </HStack>
                </HStack>
            </NavbarContainer>
        </nav>
    )
}

export default NavBar