import LoginFormContainer from "@/components/login-page/loginFormContainer";
import ImageContainer from "@/components/ui/imageContainer";

const Login = () => {
  return (
    <div className="flex h-[100svh] flex-col md:flex-row">
      <LoginFormContainer />
      <ImageContainer
        component="login"
        alt="An aeroplane flying through the clouds"
        src="/images/plane.jpeg"
      />
    </div>
  );
};

export default Login;
