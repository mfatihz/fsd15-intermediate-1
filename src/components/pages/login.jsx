import AuthTemplate from "../templates/auth-template";
import LoginForm from "../organisms/login-form";
import AuthHeader from "../molecules/auth-header";

const Login = () => {
  return (
    <AuthTemplate bgImage={"login-bg.svg"}>
      <AuthHeader title="Masuk" message="Selamat datang kembali!"/>
      <LoginForm />
    </AuthTemplate>
  );
};

export default Login;
