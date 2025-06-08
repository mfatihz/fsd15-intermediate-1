import AuthTemplate from "../templates/auth-template";
import RegisterForm from "../organisms/register-form";
import AuthHeader from "../molecules/auth-header";

const Register = () => {
  return (
    <AuthTemplate bgImage={"register-bg.svg"}>
      <AuthHeader title="Daftar" message="Selamat datang!"/>
      <RegisterForm />
    </AuthTemplate>
  );
};

export default Register;
