import { useState, useEffect } from "react";
import { SERVER_ENDPOINT, CITIES_ENDPOINT } from "../config";

export const useOptionsFetch = () => {
  const [services, setServices] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchOptions = async () => {
    setError(false);
    setLoading(true);
    try {
      const servicesArray = await (
        await fetch(`${SERVER_ENDPOINT}/services`)
      ).json();
      const servicesArr = servicesArray.filter((item) => {
        return { value: item.value, id: item._id };
      });

      setServices(servicesArr);

      const citiesArray = await (await fetch(CITIES_ENDPOINT)).json();
      const CitiesArr = citiesArray.Germany.map((item, index) => {
        return {
          key: index,
          value: item,
        };
      });

      setCities(CitiesArr);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOptions();
  }, []);

  return [{ services, cities, loading, error }, fetchOptions];
};
