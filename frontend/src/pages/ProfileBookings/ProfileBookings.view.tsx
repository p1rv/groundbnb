import { PropsWithChildren } from "react";
import Button from "../../components/Button";
import { IBookingData } from "./ProfileBookings.container";

interface IProfileProps {
  data: IBookingData[];
  redirectToBookings: () => void;
  redirectToProperties: () => void;
  signout: () => void;
}

const ProfileBookings: React.FC<PropsWithChildren<IProfileProps>> = ({ data, redirectToBookings, redirectToProperties, signout }) => {
  return (
    <div className="flex w-[80%] mx-auto gap-x-8 items-start">
      <div className="flex-[1_1_20%] flex flex-col gap-y-4 p-8 shadow-[0_0_60px_-40px_#2e4e6e] rounded-[20px] items-center max-h-min">
        <Button
          className="w-full"
          onClick={redirectToBookings}
        >
          Bookings
        </Button>
        <Button
          className="w-full"
          onClick={redirectToProperties}
        >
          Properties
        </Button>
        <Button
          onClick={signout}
          fill
          className="w-full hover:bg-yellow hover:border-yellow hover:text-black"
        >
          Signout
        </Button>
      </div>
      <div className="flex-[4_4_80%] flex flex-col gap-y-6">
        {data.map((booking) => (
          <div className="bg-white shadow-[0_0_60px_-30px_#2e4e6e80] rounded-[20px] p-4 flex flex-row gap-y-4 justify-between rounded-[20px]">
            <div className="flex-1 flex flex-col">
              <div className="flex-1">City</div>
              <div className="flex-1 font-bold">{booking.property.city}</div>
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex-1">Name</div>
              <div className="flex-1 font-bold">{booking.property.name}</div>
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex-1">Check In</div>
              <div className="flex-1 font-bold">{new Date(booking.check_in).toLocaleDateString("pl-PL")}</div>
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex-1">Check Out</div>
              <div className="flex-1 font-bold">{new Date(booking.check_out).toLocaleDateString("pl-PL")}</div>
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex-1">Total</div>
              <div className="flex-1 font-bold">{booking.total_price} EUR</div>
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex-1">Status</div>
              <div className="flex-1 font-bold">
                {booking.status === 0
                  ? "Registered"
                  : booking.status === 1
                  ? "Paid for"
                  : booking.status === 2
                  ? "In progress"
                  : "Archived"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileBookings;
