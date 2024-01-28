import { useContext, useEffect, useState } from "react";
import { api } from "../../api/api";
import View from "./Profile.view";
import Header from "../../components/Header";
import { UserContext } from "../../providers/UserProvider/UserProvider";
import { useRouter } from "../../router/hooks";

export interface IProfileData {
  id: number;
  name?: string;
  surname?: string;
  dob?: string;
  postal?: string;
  city?: string;
  street?: string;
  building_no?: string;
  flat_no?: string;
  phone?: string;
  user: {
    nick: string;
    email: string;
  };
}

const ProfilePage: React.FC = () => {
  const [data, setData] = useState<IProfileData>({} as IProfileData);
  const { signout } = useContext(UserContext);
  const { navigate } = useRouter();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const { data: res } = await api.get("/profiles/me");
      setData(res);
    } catch (err) {
      console.log(err.response);
    }
  };

  const redirectToBookings = () => {
    navigate("/profile/bookings");
  };

  const redirectToProperties = () => {
    navigate("/profile/properties");
  };

  const onSubmit = async (values: Partial<IProfileData>) => {
    const { dob, ...rest } = values;
    const { status } = await api.patch("/profiles/update", { dob: dob ? new Date(dob).toISOString() : "", ...rest });
    if (status === 200) {
      fetchProfile();
    }
  };

  const signOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    signout();
  };

  return (
    <div>
      <Header />
      <View
        data={data}
        redirectToBookings={redirectToBookings}
        redirectToProperties={redirectToProperties}
        onSubmit={onSubmit}
        signout={signOut}
      />
    </div>
  );
};

export default ProfilePage;
