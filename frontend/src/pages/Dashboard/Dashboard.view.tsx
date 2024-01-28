import Header from "../../components/Header";
import PropertyListing from "../../components/PropertyListing";
import { PropertyListingType } from "../../components/PropertyListing/PropertyListing.type";
import { useRouter } from "../../router/hooks";

interface IDashboardProps {
  properties: PropertyListingType[];
}

const Dashboard: React.FC<IDashboardProps> = ({ properties }) => {
  const { navigate } = useRouter();

  return (
    <div className="font-nunito bg-blueWhite">
      <Header />
      <div className="columns-2 gap-8 p-8 md:columns-1 [&>div]:mb-8">
        {properties
          .sort((a, b) => a.id - b.id)
          .map((property) => (
            <PropertyListing
              key={property.id}
              property={property}
              onClick={() => navigate(`property/${property.id}`)}
            />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
