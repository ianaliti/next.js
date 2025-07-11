import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(3).max(500),
  category: z.string().min(3).max(20),
  link: z.string().url("URL must point to an image file"),
  pitch: z.string().min(10),
})