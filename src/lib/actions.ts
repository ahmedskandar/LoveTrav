"use server";

import { LoginFormState, ResetFormState, SignUpFormState, UpdateFormState } from "./types";
import {
  initialLoginFormState,
  initialSignUpFormState,
  initialResetFormState,
  initialUpdateFormState,
} from "./constants";
import {
  loginSchema,
  resetSchema,
  signUpSchema,
  updateSchema,
} from "./schemas";
import { login, reset, signup, update } from "@/services/apiAuth";

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

export const resetAction = async (
  prevState: ResetFormState,
  formData: FormData,
) => {
  const email = formData.get("email") as string;
  const validatedReset = resetSchema.safeParse({ email });
  if (!validatedReset.success)
    return {
      ...initialResetFormState,
      email: validatedReset.error.formErrors.fieldErrors?.email?.[0] || "",
    };

  try {
    await reset({ email });
    return {
      ...initialResetFormState,
      resetSuccess:
        "Verification email has been sent! Please check your email for a link to complete the process.",
    };
  } catch (e) {
    if (e instanceof Error)
      return { ...initialResetFormState, resetError: e.message };
  }
  return initialResetFormState;
};

export const updateAction = async (
  prevState: UpdateFormState,
  formData: FormData,
) => {
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;
  const validatedPassword = updateSchema.safeParse({password, confirmPassword});

  if (!validatedPassword.success) {
    const errors = validatedPassword.error.formErrors.fieldErrors;
    return {
      ...initialUpdateFormState,
      confirmPassword: errors?.confirmPassword?.[0] || "",
      password: errors?.password?.[0] || "",
    };
  }

  try {
    await update({ password });
    return {
      ...initialUpdateFormState,
      updateSuccess:
        "Password successfully updated! Be sure to not forget it next time :)",
    };
  } catch (e) {
    if (e instanceof Error)
      return { ...initialUpdateFormState, updateError: e.message };
  }
  return initialUpdateFormState;
};
