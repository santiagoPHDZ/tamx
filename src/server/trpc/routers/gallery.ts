import { db } from "@/lib/prisma";
import { createTRPCRouter, publicProcedure } from "../trpc";


export const galleryRouter = createTRPCRouter({

    getlatest: publicProcedure.query(async ({ ctx }) => {

        const gallery = db.gallery.findMany({
            orderBy: {
                year: "desc"
            }
        })

        return gallery
    }),
})
