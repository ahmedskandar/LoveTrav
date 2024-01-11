import Logo from "@/components/ui/logo";
import Heading from "../ui/heading";
import LoginForm from "./loginForm";

const SignupFormContainer = () => {
  return (
    <div className="flex basis-1/2 flex-col items-center p-10 md:h-[100svh]">
      <Logo />
      <div className="mx-auto w-full max-w-md">
        <Heading className="mt-8">Log in</Heading>
        <LoginForm />
      </div>
    </div>
  );
};

export default SignupFormContainer;
