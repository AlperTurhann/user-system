import { z } from "zod";
import * as RPNInput from 'react-phone-number-input';

const schema = z
  .object({
    name: z.string().min(1, "Name is required"),
    surname: z.string().min(1, "Surname is required"),
    phone: z.string().refine(val => RPNInput.isValidPhoneNumber(val), { message: "Enter a valid phone number" }),
    email: z.string().email("Invalid email"),
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
  })

  export { schema as EditFormSchema };
  export type EditFormData = z.infer<typeof schema>;