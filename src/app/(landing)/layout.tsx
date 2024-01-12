
import MainContainer from "@/components/containers/main-container"
import NavBar from "@/components/navbar"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <main className="w-screen h-screen">
            <NavBar />
            
            <MainContainer >
                <ScrollArea className="h-full w-full">
                    {children}
                    <ScrollBar orientation="vertical" />
                </ScrollArea>
            </MainContainer>
        </main>
    )
}

export default Layout
