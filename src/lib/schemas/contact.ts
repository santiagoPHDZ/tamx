
import { z } from "zod";

// Create
export const contactSchema = z.object({
    name: z.string().optional(),
    email: z.string(),
    message: z.string().optional(),
})