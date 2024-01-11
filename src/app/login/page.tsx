import LoginFormContainer from "@/components/login-page/loginFormContainer";
import AuthPageContainer from "@/components/ui/authPageContainer";
import ImageContainer from "@/components/ui/imageContainer";

const Login = () => {
  return (
    <AuthPageContainer>
      <LoginFormContainer />
      <ImageContainer
        component="login"
        alt="An aeroplane flying through the clouds"
        src="/images/plane.jpeg"
      />
    </AuthPageContainer>
  );
};

export default Login;
