
import { z } from "zod";

// Create
export const contactSchema = z.object({
    name: z.string(),
    number: z.coerce.string(),
    message: z.string().optional(),
})