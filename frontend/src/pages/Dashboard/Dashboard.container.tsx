import { useEffect, useState } from "react";
import View from "./Dashboard.view";
import { PropertyListingType } from "../../components/PropertyListing/PropertyListing.type";
import { api } from "../../api/api";
import { useRouter } from "../../router/hooks";

const DashboardPage: React.FC = () => {
  const [properties, setProperties] = useState<PropertyListingType[]>([]);
  const { query } = useRouter();

  const fetchAll = async () => {
    const { data } = await api.get(query.has("search") ? `/properties?search=${query.get("search")}` : "/properties");
    setProperties(data);
  };

  useEffect(() => {
    fetchAll();
  }, [query]);

  return <View properties={properties} />;
};
export default DashboardPage;
