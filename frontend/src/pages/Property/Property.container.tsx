import { useParams } from "react-router-dom";
import View from "./Property.view";
import { useEffect, useState } from "react";
import { PropertyType } from "./Property.types";
import { api } from "../../api/api";
import Header from "../../components/Header";
import { useRouter } from "../../router/hooks";

const PropertyPage: React.FC = () => {
  const { id } = useParams();
  const [property, setProperty] = useState<PropertyType>({} as PropertyType);
  const { navigate } = useRouter();

  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/properties/${id}`);
      setProperty(data);
    })();
  }, []);

  const book = async (propertyId: number, total: number, checkIn: string, checkOut: string) => {
    try {
      const { status } = await api.post("/bookings/submit", { propertyId, total, checkIn, checkOut });
      if (status === 201) {
        navigate("/profile/bookings");
      }
    } catch (err) {
      navigate("/login");
    }
  };

  return (
    <div className="font-nunito">
      <Header />
      <View
        property={property}
        book={book}
      />
    </div>
  );
};

export default PropertyPage;
