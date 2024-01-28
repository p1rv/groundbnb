import { PropertyListingType } from "./PropertyListing.type";
import Star from "../../assets/svgs/star.svg";

interface IPropertyListing {
  property: PropertyListingType;
  onClick: () => void;
}

const PropertyListing: React.FC<IPropertyListing> = ({ property, onClick }) => {
  return (
    <div
      className="group overflow-hidden rounded-[20px] shadow-[0_0_60px_-30px_#2E4E6E] transition-color duration-200 cursor-pointer"
      onClick={onClick}
    >
      {property.imgs.length ? (
        <img
          src={property.imgs[0]}
          alt={property.name}
          className="group-hover:scale-105 transition-all duration-400"
        />
      ) : (
        <div className="">NO IMAGE</div>
      )}
      <div className="p-4 relative z-[2] bg-white flex justify-between items-start">
        <div className="flex flex-col gap-y-2">
          <div className="font-bold text-2xl">{property.city.toUpperCase()}</div>
          <div>{property.name}</div>
          <div className="text-xl">{property.price} EUR/day</div>
        </div>
        {property.averageRating && (
          <div className="text-2xl flex">
            <div className="mx-1">{(Math.round(property.averageRating * 10) / 10).toFixed(1)}</div>
            <img
              src={Star}
              alt="star"
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default PropertyListing;
