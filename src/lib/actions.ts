"use server";

import { redirect } from "next/navigation";
import { LoginFormState, SignUpFormState } from "./types";
import { initialLoginFormState, initialSignUpFormState } from "./constants";
import { loginSchema, signUpSchema } from "./schemas";
import { login, signup } from "@/services/apiAuth";

export const signUpAction = async (
  prevState: SignUpFormState,
  formData: FormData,
) => {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;
  const email = formData.get("email") as string;
  const nationality = formData.get("nationality") as string;
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
      ...initialSignUpFormState,
      username: error?.username?.[0] || "",
      password: error?.password?.[0] || "",
      confirmPassword: error?.confirmPassword?.[0] || "",
      email: error?.email?.[0] || "",
      nationality: error?.nationality?.[0] || "",
      image: error?.image?.[0] || "",
    };
  }

  //Connect to db and send data for signing up
  try {
    await signup({
      username,
      email,
      nationality,
      password,
      image,
    });
    return {
      ...initialSignUpFormState,
      signUpSuccess:
        "Account successfully created! Please verify your email to be able to use our services",
    };
  } catch (e) {
    if (e instanceof Error)
      return { ...initialSignUpFormState, signUpError: e.message };
  }
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
      ...initialLoginFormState,
      email: error?.email?.[0] || "",
      password: error?.password?.[0] || "",
    };
  }

  //Connect to db and send data for logging in
  try {
    await login({ email, password });
    return {
      ...initialLoginFormState,
      loginSuccess: "Successfully logged in",
    };
  } catch (e) {
    if (e instanceof Error)
      return { ...initialLoginFormState, loginError: e.message };
  }
  return initialLoginFormState;
};
