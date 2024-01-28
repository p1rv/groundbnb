import { useContext, useEffect, useState } from "react";
import { api } from "../../api/api";
import View from "./ProfileProperties.view";
import Header from "../../components/Header";
import { UserContext } from "../../providers/UserProvider/UserProvider";
import { useRouter } from "../../router/hooks";

export interface IPropertyData {
  id: number;
  name: string;
  description: string;
  postal: string;
  city: string;
  street: string;
  building_no: string;
  flat_no: string;
  rooms: number;
  area: number;
  kitchen: boolean;
  price: number;
  imgs: string;
  amenities: string;
}

const ProfilePropertyPage: React.FC = () => {
  const [data, setData] = useState<IPropertyData[]>([]);
  const { signout } = useContext(UserContext);
  const { navigate } = useRouter();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const { data: res } = await api.get("/properties/me");
      const updated = res.map((property) => {
        const imgs = property.imgs.join(",");
        const amenities = property.amenities.reduce((acc, current) => [...acc, current.name], []).join(",");
        return { ...property, imgs, amenities };
      });
      setData(updated);
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

  const onSubmit = (values: IPropertyData) => {
    console.log("test");
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

export default ProfilePropertyPage;
