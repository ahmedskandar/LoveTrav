import { LoginFormState, SignUpFormState } from "../lib/types";
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