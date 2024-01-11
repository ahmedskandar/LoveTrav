import SignupFormContainer from "@/components/signup-page/SignupFormContainer";
import AuthPageContainer from "@/components/ui/authPageContainer";
import ImageContainer from "@/components/ui/imageContainer";

const Signup = () => {
  return (
    <AuthPageContainer>
      <ImageContainer
        component="signup"
        alt="A travelling couple sitting together enjoying next to Eiffel tower"
        src="/images/couple.jpeg"
      />
      <SignupFormContainer />
    </AuthPageContainer>
  );
};

export default Signup;
