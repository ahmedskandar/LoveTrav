import { z } from "zod";
import { loginSchema, resetSchema, signUpSchema, updateSchema } from "./schemas";

export type FormPrompt = {
  to: "login" | "signup";
};

export type Children = {
  children: React.ReactNode;
};

export type ClassName = {
  className?: string;
};

export type Heading = Children & ClassName;

export type SignUpFormState = z.infer<typeof signUpSchema>

export type LoginFormState = z.infer<typeof loginSchema>

export type ResetFormState = z.infer<typeof resetSchema>;

export type UpdateFormState = z.infer<typeof updateSchema>;