import { useContext, useState } from "react";
import { api } from "../../api/api";
import { useRouter } from "../../router/hooks";
import { IRegisterValues, ITokens } from "./Register.consts";
import View from "./Register.view";
import { UserContext } from "../../providers/UserProvider/UserProvider";

const RegisterPage: React.FC = () => {
  const [error, setError] = useState("");
  const { signin } = useContext(UserContext);
  const { navigate } = useRouter();

  const onSubmit = async (values: IRegisterValues) => {
    try {
      const { data } = await api.post<ITokens>("/auth/signup", { ...values });
      if (!data) {
        setError("There was an error, please try again");
        return;
      }
      localStorage.setItem("accessToken", data.access_token);
      localStorage.setItem("refreshToken", data.refresh_token);
      signin();
    } catch (err) {
      setError(err.response.status === 404 ? "Incorrect email or password" : err.response.statusText);
    }
  };

  const redirectToLogin = () => {
    navigate("/login");
  };

  return (
    <View
      onSubmit={onSubmit}
      redirectToLogin={redirectToLogin}
      error={error}
    />
  );
};

export default RegisterPage;
