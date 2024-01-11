"use client";

import { Input } from "@nextui-org/react";
import Password from "../ui/password";
import { useFormState } from "react-dom";
import { signUpAction } from "@/lib/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { SignUpFormState } from "@/lib/types";
import { initialSignUpFormState } from "@/lib/constants";
import NationalitySelect from "../ui/NationalitySelect";
import ImageUpload from "../ui/ImageUpload";
import SubmitButton from "../ui/submitButton";
import FormPrompt from "../ui/formPrompt";

const SignupForm = () => {
  const [formState, action] = useFormState<SignUpFormState, FormData>(
    signUpAction,
    initialSignUpFormState,
  );
  return (
    <form className="mt-8" action={action}>
      <Input
        isRequired
        name="username"
        type="text"
        variant="bordered"
        isInvalid={!!formState.usernameMessage}
        errorMessage={formState.usernameMessage}
        label="Username"
        className="mb-5 placeholder:text-black"
        color="warning"
      />
      <Input
        isRequired
        name="email"
        type="email"
        variant="bordered"
        isInvalid={!!formState.emailMessage}
        errorMessage={formState.emailMessage}
        label="Email"
        className="mb-5 placeholder:text-black"
        color="warning"
        endContent={<FontAwesomeIcon color="lightgray" icon={faEnvelope} />}
      />
      <Password
        errorMessage={formState.passwordMessage}
        label="Password"
        name="password"
      />
      <Password
        errorMessage={formState.confirmPasswordMessage}
        label="Confirm password"
        name="confirmPassword"
      />
      <NationalitySelect
        name="nationality"
        errorMessage={formState.nationalitySelectMessage}
      />
      <ImageUpload name="image" />
      <SubmitButton>Sign up</SubmitButton>
      <FormPrompt to="login" />
    </form>
  );
};

export default SignupForm;
