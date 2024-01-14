export const supabaseKey = process.env.NEXT_SUPABASE_API_KEY!;
export const rapidApiKey = process.env.NEXT_RAPID_API_KEY!;

export const initialSignUpFormState = {
  username: "",
  password: "",
  confirmPassword: "",
  email: "",
  nationality: "",
  image: "",
  signUpSuccess: "",
  signUpError: "",
};

export const initialLoginFormState = {
  email: '',
  password: '',
  loginSuccess: '',
  loginError: ''
}

export const initialResetFormState = {
  email: '',
  resetSuccess: '',
  resetError: ''
}

export const initialUpdateFormState = {
  password: '',
  confirmPassword: '',
  updateError: '',
  updateSuccess: ''
}