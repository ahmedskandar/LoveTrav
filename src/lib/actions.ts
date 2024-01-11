"use server";

import { redirect } from "next/navigation";
import { LoginFormState, SignUpFormState } from "./types";
import { initialLoginFormState, initialSignUpFormState } from "./constants";
import { loginSchema, signUpSchema } from "./schemas";

export const signUpAction = async (
  prevState: SignUpFormState,
  formData: FormData,
) => {
  const username = formData.get("username");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  const email = formData.get("email");
  const nationality = formData.get("nationality");
  const image = formData.get("image") as File | string;

  let parsedImage;

  if (typeof image === "string") {
    parsedImage = JSON.parse(image);
  }

  const validatedSignUp = signUpSchema.safeParse({
    username,
    password,
    confirmPassword,
    email,
    nationality,
    image: parsedImage?.size,
  });

  if (!validatedSignUp.success) {
    const error = validatedSignUp.error.formErrors.fieldErrors;
    return {
      username: error?.username?.[0] || "",
      password: error?.password?.[0] || "",
      confirmPassword: error?.confirmPassword?.[0] || "",
      email: error?.email?.[0] || "",
      nationality: error?.nationality?.[0] || "",
      image: error?.image?.[0] || "",
      db: "",
    };
  }

  // try {
  //   //db connection
  // } catch (e) {
  //   if (e instanceof Error)
  //     return { ...initialSignUpFormState, db: e.message };
  //   return { ...initialSignUpFormState, db: "SOmething wrong happened" };
  // } finally {
  //   //redirect
  //   redirect("/");
  // }

  return initialSignUpFormState;
};

export const loginAction = async (
  prevState: LoginFormState,
  formData: FormData,
) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const validatedLogin = loginSchema.safeParse({ email, password });

  if (!validatedLogin.success) {
    const error = validatedLogin.error.formErrors.fieldErrors;
    return {
      email: error?.email?.[0] || "",
      password: error?.password?.[0] || "",
    };
  }

  //Connect to db and send data for logging in
  return initialLoginFormState;
};
