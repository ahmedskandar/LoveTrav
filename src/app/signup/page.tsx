import SignupFormContainer from "@/components/signup-page/SignupFormContainer";
import ImageContainer from "@/components/ui/imageContainer";

const Signup = () => {
  return (
    <div className="flex h-[100svh] flex-col md:flex-row">
      <ImageContainer
        alt="A travelling couple sitting together enjoying next to Eiffel tower"
        src="/images/couple.jpeg"
      />
      <SignupFormContainer />
    </div>
  );
};

export default Signup;
