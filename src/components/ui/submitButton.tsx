import { Children } from "@/lib/types";
import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

const SubmitButton = ({children}: Children) => {
  const { pending } = useFormStatus();

  return (
    <Button
      isLoading={pending}
      type="submit"
      radius="sm"
      className="mb-3 w-full bg-gradient-to-tr from-pink-500 to-yellow-500 font-bold text-white"
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
