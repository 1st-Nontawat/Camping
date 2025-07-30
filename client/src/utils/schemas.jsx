import { z } from "zod";

export const campingSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters long"),
  price: z.coerce.number().min(1, "Price is required"),
  description: z.string().max(1000, "Description must be at most 1000 characters"),
  category: z.string().min(1, "Category is required"),
  latitude: z.number(),
  longitude: z.number(),
  image: z.any()
});

export const profileSchema = z.object({
  firstname: z.string().min(2, "First name must be at least 2 characters long").max(30, "First name must be at most 30 characters long"),
  lastname: z.string().min(2, "Last name must be at least 2 characters long").max(30, "Last name must be at most 30 characters long"),
   email: z.string().email("Invalid email address"),
});