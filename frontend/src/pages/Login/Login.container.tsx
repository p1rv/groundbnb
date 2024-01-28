import { useContext, useState } from "react";
import { api } from "../../api/api";
import { useRouter } from "../../router/hooks";
import { ILoginValues, ITokens } from "./Login.consts";
import View from "./Login.view";
import { UserContext } from "../../providers/UserProvider/UserProvider";

const LoginPage: React.FC = () => {
  const [error, setError] = useState("");
  const { signin } = useContext(UserContext);
  const { navigate } = useRouter();

  const onSubmit = async (values: ILoginValues) => {
    try {
      const { data } = await api.post<ITokens>("/auth/signin", { ...values });
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

  const redirectToRegister = () => {
    navigate("/register");
  };

  return (
    <View
      onSubmit={onSubmit}
      redirectToRegister={redirectToRegister}
      error={error}
    />
  );
};

export default LoginPage;
