'use client'

import { Input } from "@nextui-org/react";

import SubmitButton from "../ui/submitButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormState } from "react-dom";
import { resetAction } from "@/lib/actions";
import { initialResetFormState } from "@/lib/constants";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useEffect } from "react";
import { toast } from "sonner";
import { redirect } from "next/navigation";

const ResetForm = () => {

 const [formState, action] = useFormState(resetAction, initialResetFormState)
  
  useEffect(() => {
    if (formState.resetError) {
      toast.error(formState.resetError);
      formState.resetError = "";
    }
    if (formState.resetSuccess) {
      toast.success(formState.resetSuccess);
      redirect("/login");
    }
  }, [formState]);

  return (
    <form action={action}>
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
      <SubmitButton>Reset</SubmitButton>
    </form>
  );
};

export default ResetForm;
