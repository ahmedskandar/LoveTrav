"use client";

import { useEffect } from "react";
import { useFormState } from "react-dom";
import { redirect } from "next/navigation";

import FormPrompt from "../ui/formPrompt";
import Password from "../ui/password";
import SubmitButton from "../ui/submitButton";
import { initialLoginFormState } from "@/lib/constants";
import { loginAction } from "@/lib/actions";

import { toast } from "sonner";
import { Checkbox, Input, Link } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const LoginForm = () => {
  const [formState, action] = useFormState(loginAction, initialLoginFormState);

  useEffect(() => {
    if (formState.loginError) {
      toast.error(formState.loginError);
      formState.loginError = "";
    }
    if (formState.loginSuccess) {
      toast.success(formState.loginSuccess);
      redirect("/");
    }
  }, [formState]);

  return (
    <form className="mt-8" action={action}>
      <Input
        isRequired
        type="email"
        name="email"
        variant="bordered"
        isInvalid={!!formState.email}
        errorMessage={formState.email}
        label="Email"
        className="mb-5 placeholder:text-black"
        color="warning"
        endContent={<FontAwesomeIcon color="lightgray" icon={faEnvelope} />}
      />
      <Password
        errorMessage={formState.password}
        label="Password"
        name="password"
      />
      <div className="mb-10 flex justify-between">
        <Checkbox color="warning">Remember me?</Checkbox>
        <Link href="/reset" color="foreground">
          Forgot password?
        </Link>
      </div>
      <SubmitButton>Log in</SubmitButton>
      {/* <p className="text-red-500 italic">{formState.db}</p> */}
      <FormPrompt to="signup" />
    </form>
  );
};

export default LoginForm;
