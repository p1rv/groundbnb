import { PropsWithChildren } from "react";

interface IProfileProps {
  data: string;
  bookings: string;
}

const Profile: React.FC<PropsWithChildren<IProfileProps>> = ({ data, bookings }) => {
  return (
    <div>
      <div>{data}</div>
      <div>{bookings}</div>
    </div>
  );
};

export default Profile;
