import Image from "next/image";
import { ROUTES } from "@/lib/routes";

const Footer = () => {

    return (
        <footer className="w-full flex flex-col items-center justify-center mx-auto gap-8">

            <div className="w-full border-t" />

            <div className="px-4 flex flex-col md:flex-row justify-between items-start w-full gap-8">

                {/* 1st block */}
                <div className="sm:col-span-12 lg:col-span-3">
                    <div className="mb-2">
                        <Image
                            src="/favicon.ico" // Assuming futura.png is in the public directory
                            alt="logo"
                            width={45} // Adjust width as needed
                            height={45} // Adjust height as needed
                        />
                    </div>
                    <h5 className="text-base font-semibold pt-2">
                        Taller de Arquitectura <br /> Mexicana
                    </h5>
                </div>

                <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
                    <h6 className="font-medium mb-2">
                        Páginas
                    </h6>
                    <ul className="text-sm">
                        {
                            ROUTES.map((page) => (
                                <li key={page.path} className="mb-2">
                                    <a href="#0" className=" text-muted-foreground hover:text-primary transition duration-150 ease-in-out">
                                        {page.label}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
                    <h6 className="font-medium mb-2">
                        Contacto
                    </h6>

                    <div className="text-muted-foreground text-sm space-y-2">
                        <p >
                            Tel. 999 242 00 94
                        </p>
                        <p >
                            Email. m-padilla-s@hotmail.com
                        </p>
                    </div>
                </div>

                <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 text-muted-foreground space-y-2 text-sm">
                    <p>
                        Taller de Arquitectura Mexicana S.A. de C.V.
                    </p>
                    <p>
                        Av Campestre 271
                    </p>
                    <p>
                        Fracc. Campestre
                    </p>
                    <p>
                        CP. 97120
                    </p>
                    <p>
                        Mérida Yucatán.
                    </p>
                </div>

            </div>

            <div className="w-full border-t" />

            <div className="px-4 md:flex w-full md:items-center md:justify-between pb-8">
                <div className="text-sm text-gray-600 mr-4">&copy; tamx.mx. All rights reserved.</div>
            </div>

        </footer>
    )
}

export default Footer;