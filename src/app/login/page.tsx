import LoginFormContainer from "@/components/login-page/loginFormContainer";
import AuthPageContainer from "@/components/ui/authPageContainer";
import ImageContainer from "@/components/ui/imageContainer";
import planeImage from "/public/images/plane.jpeg";

const Login = () => {
  return (
    <AuthPageContainer>
      <LoginFormContainer />
      <ImageContainer
        component="login"
        alt="An aeroplane flying through the clouds"
        src={planeImage}
      />
    </AuthPageContainer>
  );
};

export default Login;
