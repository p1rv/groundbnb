import { useContext, useEffect, useState } from "react";
import { api } from "../../api/api";
import View from "./ProfileBookings.view";
import Header from "../../components/Header";
import { UserContext } from "../../providers/UserProvider/UserProvider";
import { useRouter } from "../../router/hooks";

export interface IBookingData {
  id: number;
  check_in: string;
  check_out: string;
  status: number;
  total_price: number;
  property: {
    id: number;
    name: string;
    city: string;
  };
}

const ProfileBookingsPage: React.FC = () => {
  const [data, setData] = useState<IBookingData[]>([]);
  const { signout } = useContext(UserContext);
  const { navigate } = useRouter();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const { data: res } = await api.get("/bookings/me");
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
        signout={signOut}
      />
    </div>
  );
};

export default ProfileBookingsPage;
