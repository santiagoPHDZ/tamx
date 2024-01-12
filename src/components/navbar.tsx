"use client"

import Link from "next/link"
import NavbarContainer from "./containers/navbar-container"
import { HStack } from "./stack"
import { Text } from "./text"
import { Button } from "./ui/button"
import { MoveUpRight } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Avatar } from "@radix-ui/react-avatar"
import { AvatarFallback, AvatarImage } from "./ui/avatar"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

const PAGES = [
    {
        label: "Constructora",
        path: "/constructora"
    },
    {
        label: "Inmuebles",
        path: "/inmuebles"
    },
    {
        label: "Materiales",
        path: "/materiales"
    }
]
const NavBar = () => {

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

                        {
                            PAGES.map((p) => (
                                <Link
                                    key={p.path}
                                    href={p.path}
                                >
                                    <Text level={4} className={cn("text-sm font-light", p.path === "/constructora" ? " text-primary" : "text-secondary-foreground/50")}>
                                        {p.label}
                                    </Text>
                                </Link>

                            ))
                        }
                    </HStack>

                    <HStack className="items-center justify-center space-x-2">
                        <ThemeToggle />
                    </HStack>
                </HStack>
            </NavbarContainer>
        </nav>
    )
}

export default NavBar