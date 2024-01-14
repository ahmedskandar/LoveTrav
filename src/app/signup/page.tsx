import SignupFormContainer from "@/components/signup-page/signupFormContainer";
import AuthPageContainer from "@/components/ui/authPageContainer";
import ImageContainer from "@/components/ui/imageContainer";
import coupleImage from '/public/images/couple.jpeg'

const Signup = () => {
  return (
    <AuthPageContainer>
      <ImageContainer
        component="signup"
        alt="A travelling couple sitting together enjoying next to Eiffel tower"
        src={coupleImage}
      />
      <SignupFormContainer />
    </AuthPageContainer>
  );
};

export default Signup;
