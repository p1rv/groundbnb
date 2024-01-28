import { PropertyType } from "./Property.types";
import Star from "../../assets/svgs/star.svg";
import Review from "../../components/Review";
import { useEffect, useState } from "react";
import Button from "../../components/Button";

interface IPropertyProps {
  property: PropertyType;
  book: (propertyId: number, total: number, checkIn: number, checkOut: number) => void;
}

const Property: React.FC<IPropertyProps> = ({ book, property }) => {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [days, setDays] = useState(0);
  const [people, setPeople] = useState(1);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
    if (!checkIn || !checkOut) return;
    if (checkIn && checkOut && checkIn >= checkOut) {
      setError("Check out must be after check in");
      return;
    }
    property.bookings.forEach((booking) => {
      if (checkOut >= new Date(booking.check_in) && checkIn <= new Date(booking.check_out)) {
        setError("Property already booked at this time");
        return;
      }
    });
    setDays((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
  }, [checkIn, checkOut]);

  if (!property?.name) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-[80%] items-start justify-center mx-auto gap-x-8">
      <div className="flex-1 flex flex-col">
        <img
          src={property.imgs[0]}
          alt="Main Image"
          className="mb-4 rounded-[20px] shadow-[0_0_60px_-40px_#2E4E6E]"
        />
        {property.imgs.length > 1 && (
          <div className="columns-2 gap-4 [&>img]:mb-4">
            {property.imgs.slice(1).map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Property Image"
                className="rounded-[20px] shadow-[0_0_60px_-40px_#2E4E6E]"
              />
            ))}
          </div>
        )}
      </div>
      <div className="flex-1 flex flex-col gap-y-8">
        <div className="flex justify-between ">
          <div className="text-3xl">{property.name}</div>
          {property.reviews.length > 0 && (
            <div className="text-2xl flex items-center gap-x-1">
              <div>{(Math.round(property.reviews.reduce((acc, current) => acc + current.rating, 0) * 10) / 10).toFixed(1)}</div>
              <img
                className="w-[24px]"
                src={Star}
                alt="star"
              />
            </div>
          )}
        </div>
        <div className="flex gap-x-4">
          <div className="flex-1 flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-4">
              <div>
                {property.city}, {property.postal}
              </div>
              <div>
                {property.street && `${property.street}, `}
                {property.building_no}
                {property.flat_no && `/${property.flat_no}`}
              </div>
            </div>
            <div>{property.price} EUR/day</div>
            {checkIn && checkOut && !error && (
              <div className="flex flex-col gap-y-4 shadow-[0_0_60px_-40px_#2E4E6E] rounded-[20px] p-4">
                <div className="text-2xl">To pay:</div>
                <div className="flex justify-between">
                  <div>Days</div>
                  <div>{days}</div>
                </div>
                <div className="flex justify-between">
                  <div>People</div>
                  <div>{people}</div>
                </div>
                <div className="flex justify-between">
                  <div>Fee</div>
                  <div>{people * days * property.price * 0.01} EUR</div>
                </div>
                <div className="flex justify-between text-xl">
                  <div>Total</div>
                  <div>{people * days * property.price * 0.01 + people * days * property.price} EUR</div>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-y-4 shadow-[0_0_60px_-40px_#2E4E6E] rounded-[20px] p-4">
              {error && <div className="text-rose-400">{error}</div>}
              <div className="flex justify-between">
                <label for="checkIn">Check in: </label>
                <input
                  type="date"
                  name="checkIn"
                  min={new Date().toLocaleDateString("en-CA")}
                  value={checkIn?.toLocaleDateString("en-CA")}
                  onChange={(e) => setCheckIn(e.target.valueAsDate ? new Date(e.target.valueAsDate) : null)}
                />
              </div>
              <div className="flex justify-between">
                <label for="checkOut">Check out: </label>
                <input
                  type="date"
                  name="checkOut"
                  min={new Date().toLocaleDateString("en-CA")}
                  value={checkOut?.toLocaleDateString("en-CA")}
                  onChange={(e) => setCheckOut(e.target.valueAsDate ? new Date(e.target.valueAsDate) : null)}
                />
              </div>
              <div className="flex justify-between">
                <label for="amountOfPeople">Amount of people: </label>
                <input
                  type="number"
                  min={1}
                  name="checkOut"
                  value={people}
                  className="w-[20%]"
                  onChange={(e) => setPeople(e.target.valueAsNumber)}
                />
              </div>
            </div>
            {checkIn && checkOut && !error && (
              <Button
                onClick={() =>
                  book(
                    property.id,
                    people * days * property.price * 0.01 + people * days * property.price,
                    checkIn!.getTime(),
                    checkOut!.getTime()
                  )
                }
                fill
                className="w-full text-3xl"
              >
                Book
              </Button>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-xl mb-2">Reviews</div>
          {property.reviews.length > 0 ? (
            property.reviews.map((review) => (
              <Review
                key={review.id}
                review={review}
              />
            ))
          ) : (
            <div className="">No reviews yet</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Property;
