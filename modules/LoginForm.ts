import { z } from "zod";

const schema = z.object({
  email: z.string({ required_error: "Email is required" }).email("Invalid email"),
  password: z.string({ required_error: "Password is required"}).min(8, "Password must be at least 8 characters"),
});

export { schema as LoginFormSchema };
export type LoginFormData = z.infer<typeof schema>;