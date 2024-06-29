import {z} from "zod";

const contactSchema = z.object({
  username: z
    .string({required_error: "username is required"})
    .trim()
    .min(3, {message: "username must be atleast 3 characters"})
    .max(25, {message: "username character must not exceed 25 characters"}),

    email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),

    message: z
    .string({ required_error: "Message is required" })
    .trim()
    .min(3, { message: "Message must be at least 3 characters" })
    .max(1024, { message: "Message must not be more than 1024 characters" }),
})


export default contactSchema;

