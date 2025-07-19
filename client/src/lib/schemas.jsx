import { z } from "zod";


const campingSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters long"),
  price: z.coerce.number(),
  description: z.string().max(50, "Description must be at most 50 characters long"),
  category: z.string()  
});

export default campingSchema;