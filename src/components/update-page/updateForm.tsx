"use client";

import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";

import { initialUpdateFormState } from "@/lib/constants";
import Password from "../ui/password";
import SubmitButton from "../ui/submitButton";
import { updateAction } from "@/lib/actions";

import { toast } from "sonner";

const UpdateForm = () => {
  const [formState, action] = useFormState(
    updateAction,
    initialUpdateFormState,
  );

  useEffect(() => {
    if (formState.updateError) {
      toast.error(formState.updateError);
      formState.updateError = "";
    }
    if (formState.updateSuccess) {
      toast.success(formState.updateSuccess);
      redirect("/app");
    }
  }, [formState]);

  return (
    <form action={action}>
      <Password errorMessage={formState.password} label="Password" name="password" />
      <Password
        errorMessage={formState.confirmPassword}
        label="Confirm password"
        name="confirmPassword"
      />
      <SubmitButton>Update</SubmitButton>
    </form>
  );
};

export default UpdateForm;
