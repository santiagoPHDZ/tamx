
import Footer from "@/components/footer"
import NavBar from "@/components/navbar"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <main className="w-screen h-screen overflow-y-scroll">

            <div className="pt-16">
                <NavBar />
                <div className="w-full ">
                    {children}
                </div>
            </div>

            <Footer />
        </main>
    )
}

export default Layout
