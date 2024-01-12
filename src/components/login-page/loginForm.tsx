"use client";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox, Input, Link } from "@nextui-org/react";
import Password from "../ui/password";
import SubmitButton from "../ui/submitButton";
import { useFormState } from "react-dom";
import { initialLoginFormState } from "@/lib/constants";
import { loginAction } from "@/lib/actions";
import FormPrompt from "../ui/formPrompt";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const LoginForm = () => {
  const [formState, action] = useFormState(loginAction, initialLoginFormState);


  useEffect(() => {

    if (formState.loginError) toast.error(formState.loginError);
    if (formState.loginSuccess) {
      toast.success(formState.loginSuccess);
      redirect('/')
    }
  }, [formState.loginSuccess, formState.loginError])

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
