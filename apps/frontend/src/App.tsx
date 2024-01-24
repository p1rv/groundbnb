import { useEffect, useState } from "react";

type Currencies = "PLN" | "EUR" | "USD";
interface ILocation {
  name: string;
  lat: number;
  lon: number;
}
interface IPlace {
  id: string;
  name: string;
  location: ILocation;
  price: number;
  currency: Currencies;
}

function App() {
  const [places, setPlaces] = useState<IPlace[]>([]);

  const fetchPlaces = async () => {
    const res = await fetch("/api/places/getAll");
    if (!res.ok) {
      console.error("Failed to fetch available places, check your internet connection or fix bugs :)");
      return;
    }
    const places: IPlace[] = await res.json();
    setPlaces(places);
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  return (
    <>
      {places.map(({ id, name, location, price, currency }) => (
        <div key={id}>
          <h3>{name}</h3>
          <div>adres: {location.name}</div>
          <div>cena: {price + currency}</div>
        </div>
      ))}
    </>
  );
}

export default App;
