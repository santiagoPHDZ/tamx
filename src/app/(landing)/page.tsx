import Image from "next/image"


const PROJECTS = [
        {
        path: "refugio-entrada.jpg",
        width: 747,
        height: 997
    },
    {
        path: "country-entrada.jpg",
        width: 927,
        height: 521
    },
    {
        path: "hotel-jardin.jpg",
        width: 1680,
        height: 945
    },
    {
        path: "parquecentral-escaleras.jpg",
        width: 747,
        height: 997
    },
    {
        path: "parquecentral-jardin.jpg",
        width: 1066,
        height: 599
    },
    {
        path: "refugio-terraza.jpg",
        width: 1066,
        height: 599
    },
    {
        path: "country-exterior.jpg",
        width: 927,
        height: 521
    },
    {
        path: "hotel-acceso.jpg",
        width: 1020,
        height: 1360
    },
    {
        path: "hotel-comedor.jpg",
        width: 1680,
        height: 935
    },
    {
        path: "hotel-jardin.jpg",
        width: 1680,
        height: 945
    },
    {
        path: "realmandinga-todos.jpg",
        width: 1680,
        height: 933
    },
    {
        path: "sanjeronimo-pilares.jpg",
        width: 480,
        height: 640
    }
]
const Page = () => {
    return (
        <div className="px-4">
            <div className="pt-4 pb-8 gap-4 columns-1 md:columns-2 lg:columns-3">
                {
                    PROJECTS.map((p) => (
                        <Image key={p.path} src={`/projectos/${p.path}`} alt={p.path} width={p.width} height={p.height} quality={100} className="mb-4 w-full h-auto grayscale hover:grayscale-0" />
                    ))
                }
            </div>
        </div>
    )
}

export default Page
