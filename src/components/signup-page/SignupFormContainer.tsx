import Logo from "@/components/ui/logo";
import Heading from "../ui/heading";
import SignupForm from "./signupForm";

const SignupFormContainer = () => {
  return (
    <div className="flex basis-1/2 flex-col items-center p-10 md:h-[100svh] md:overflow-y-scroll">
      <Logo />
      <div className="mx-auto w-full max-w-md">
        <Heading className="mt-8">Sign Up</Heading>
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupFormContainer;
