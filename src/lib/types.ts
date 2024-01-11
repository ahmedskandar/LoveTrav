import { z } from "zod";
import { loginSchema } from "./schemas";

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

export type SignUpFormState = {
  usernameMessage: string;
  passwordMessage: string;
  confirmPasswordMessage: string;
  emailMessage: string;
  nationalitySelectMessage: string;
  imageMessage: string;
  dbMessage: string;
};

export type LoginFormState = z.infer<typeof loginSchema>