import { LoginFormState, ResetFormState, SignUpFormState } from "../lib/types";
import { supabaseUrl, supabaseServer } from "./supabase";

export const login = async ({ email, password }: LoginFormState) => {
  const { data, error } = await supabaseServer.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);

  return data;
};

export const signup = async ({
  username,
  email,
  password,
  nationality,
  image,
}: SignUpFormState) => {

  if(!(image instanceof File)) return
  const imageName = `${Math.random()}-${image?.name}`.replace("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/avatars/${imageName}`;

  // 1. Create user
  const { error, data } = await supabaseServer.auth.signUp({
    email,
    password,
    options: {
      //Add optional data into the newly created user
      data: {
        username,
        nationality,
        avatar: image.name !== undefined ? imagePath : "",
      },
    },
  });

  if (data?.user?.identities?.length === 0)
    throw new Error("Account already registered");
  if (error) throw new Error(error.message);

  // 2. Upload image
  // Upload file using standard upload
  if (image.name === undefined) return;
  const { error: storageError } = await supabaseServer.storage
    .from("avatars")
    .upload(imageName, image);
  if (storageError)
    throw new Error("Image could not be uploaded, please try again");
};

export const reset = async ({ email }: ResetFormState) => {
  const { error } = await supabaseServer.auth.resetPasswordForEmail(email);
  if (error) throw new Error(error.message);
};

export const update = async ({ password }: { password: string }) => {
  const { error } = await supabaseServer.auth.updateUser({
    password: password,
  });

  if (error) throw new Error(error.message);
};

export const getCurrentUser = async () => {
  const { data: session } = await supabaseServer.auth.getSession();
  if (!session.session) return null; //If no current user

  const { data, error } = await supabaseServer.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
};
