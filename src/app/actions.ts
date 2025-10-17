"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type State = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string;
  success: boolean;
};

export async function submitContactForm(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
      success: false,
    };
  }

  try {
    // Here you would typically send an email, save to a database, etc.
    // For this example, we'll just log it to the server console.
    console.log("New contact form submission:");
    console.log(validatedFields.data);

    return {
      message: "Thank you for your message! I'll get back to you soon.",
      success: true,
    };
  } catch (e) {
    return {
      message: "An unexpected error occurred. Please try again later.",
      success: false,
    };
  }
}
