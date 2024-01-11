"use server";

import { redirect } from "next/navigation";
import { SignUpFormState } from "./types";
import { initialSignUpFormState } from "./constants";
import { signUpSchema } from "./schemas";

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
      usernameMessage: error?.username?.[0] || "",
      passwordMessage: error?.password?.[0] || "",
      confirmPasswordMessage: error?.confirmPassword?.[0] || "",
      emailMessage: error?.email?.[0] || "",
      nationalitySelectMessage: error?.nationality?.[0] || "",
      imageMessage: error?.image?.[0] || "",
      dbMessage: "",
    };
  }

  // try {
  //   //db connection
  // } catch (e) {
  //   if (e instanceof Error)
  //     return { ...initialSignUpFormState, dbMessage: e.message };
  //   return { ...initialSignUpFormState, dbMessage: "SOmething wrong happened" };
  // } finally {
  //   //redirect
  //   redirect("/");
  // }

  return initialSignUpFormState;
};
