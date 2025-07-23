import { z } from "zod";

export const campingSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters long"),
  price: z.string().min(1, "Price is required"),
  description: z.string().max(50, "Description must be at most 50 characters"),
  category: z.string().min(1, "Category is required"),
  lat: z.string().optional(),
  lng: z.string().optional(),
});

export const profileSchema = z.object({
  firstname: z.string().min(2, "First name must be at least 2 characters long").max(30, "First name must be at most 30 characters long"),
  lastname: z.string().min(2, "Last name must be at least 2 characters long").max(30, "Last name must be at most 30 characters long"),
  
});