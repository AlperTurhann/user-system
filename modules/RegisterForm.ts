import { z } from "zod";
import * as RPNInput from 'react-phone-number-input';

const schema = z
  .object({
    name: z.string({ required_error: "Name is required" }).min(1, "Name is required"),
    surname: z.string({ required_error: "Surname is required" }).min(1, "Surname is required"),
    phone: z.string({ required_error: "Phone number is required" }).refine(val => RPNInput.isValidPhoneNumber(val), { message: "Enter a valid phone number" }),
    email: z.string({ required_error: "Email is required" }).email("Invalid email"),
    sector: z.string().optional(),
    company: z.string().optional(),
    country: z.string().optional(),
    receiptName: z.string().optional(),
    receiptPhone: z.string().optional(),
    receiptEmail: z
      .string()
      .email("Invalid email")
      .optional()
      .or(z.literal("")),
    receiptTitle: z.string().optional(),
    receiptAddress: z.string().optional(),
    taxAdministration: z.string().optional(),
    taxNumber: z.string().optional(),
    password: z.string({ required_error: "Password is required" }).min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string({ required_error: "Confirm password is required" })
      .min(8, "Confirm password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

  export { schema as RegisterFormSchema };
  export type RegisterFormData = z.infer<typeof schema>;