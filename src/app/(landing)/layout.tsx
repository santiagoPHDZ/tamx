
import Footer from "@/components/footer"
import ContactUsForm from "@/components/forms/contact-us"
import NavBar from "@/components/navbar"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Metadata } from "next"

// Metadata
export const metadata: Metadata = {
    title: 'Grupo TAM',
    description: 'Despacho de Arquitectos enfocados en la satisfacción del cliente',
  }

const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <main className="w-screen h-screen overflow-y-scroll">

            <div className="pt-14">
                <NavBar />
                <div className="w-full ">
                    {children}
                </div>
            </div>

            <ContactUsForm />

            <Footer />
        </main>
    )
}

export default Layout