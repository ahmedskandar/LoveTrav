import { Input } from "@nextui-org/react";
import React from "react";
import Password from "../ui/password";
import SubmitButton from "../ui/submitButton";

const UpdateForm = () => {
  return (
    <form>
      <Password errorMessage="" label="Password" name="password" />
      <Password
        errorMessage=""
        label="Confirm password"
        name="confirmPassword"
      />
      <SubmitButton>Update</SubmitButton>
    </form>
  );
};

export default UpdateForm;
