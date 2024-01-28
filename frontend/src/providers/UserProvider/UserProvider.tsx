import { Context, createContext, useEffect, useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import { useRouter } from "../../router/hooks";
import { api } from "../../api/api";

interface IUserContext {
  user: string;
  isLoading: boolean;
  signin: () => void;
  signout: () => void;
}

const initialContext = {} as IUserContext;

export const UserContext: Context<IUserContext> = createContext(initialContext);

const UserProvider: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<string>("");
  const { navigate } = useRouter();

  const whoami = async (stay?: boolean) => {
    try {
      const { data } = await api.get<{ username: string }>("/auth/whoami");
      if (!data) {
        stay ? setIsLoading(false) : signout();
        return;
      }

      localStorage.setItem("nick", data.username);
      setUser(data.username);
    } catch (err) {
      console.log(err.response);
      stay ? setIsLoading(false) : signout();
    }
  };

  const signout = () => {
    setIsLoading(true);
    setUser("");
    localStorage.removeItem("nick");
    navigate("/");
    setIsLoading(false);
  };

  const signin = async () => {
    setIsLoading(true);
    await whoami();
    navigate("/");
    setIsLoading(false);
  };

  useEffect(() => {
    whoami(true);
  }, []);

  const value = useMemo(() => ({ user, isLoading, signin, signout }), [user]);

  return (
    <UserContext.Provider value={value}>
      <Outlet />
    </UserContext.Provider>
  );
};

export default UserProvider;
