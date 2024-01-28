import { useEffect, useState } from "react";
import { api } from "../../api/api";
import View from "./Profile.view";

const ProfilePage: React.FC = () => {
  const [data, setData] = useState("");
  const [bookings, setBookings] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { data: res } = await api.get("/profiles/me");
        setData(JSON.stringify(res));
      } catch (err) {
        console.log(err.response);
      }
      try {
        const { data: res2 } = await api.get("/bookings");
        setBookings(JSON.stringify(res2));
      } catch (err) {
        console.log(err.response);
      }
    })();
  }, []);

  return (
    <View
      data={data}
      bookings={bookings}
    />
  );
};

export default ProfilePage;
