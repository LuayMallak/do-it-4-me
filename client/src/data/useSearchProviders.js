import { useState, useContext, useEffect } from "react";
import { SERVER_ENDPOINT} from "../config";
import SearchResultContext from "./SearchResultContext";
import moment from "moment"

const useSearchProviders = () => {

  const { stateSetter, queryData, setQueryData } = useContext(
    SearchResultContext
  );

  const [searchData, setSearchData] = useState({ ...queryData });

  const [loading, setLoading] = useState({});
  const [stateError, setError] = useState({ status: false, details: "" });

  const handleCityChange = (v, string) => {
    setSearchData((prev) => ({
      ...prev,
      homepageCity: v.value,
      city: v.value,
    }));
  };
  const handleServiceChange = (v, string) => {
    setSearchData((prev) => ({
      ...prev,
      homepageService: v.value ,
      services: v._id,
    }));
  };

  const handleDateChange = (value,string) => {
    value=moment(value).format("YYYY-MM-DD")
    if (value === "Invalid date") value = moment().format("YYYY-MM-DD")
    console.log("value",value)
    setSearchData((prev) => ({ ...prev, date: value }));
  };
  const handlePriceChange = (v) => {
    setSearchData((prev) => ({ ...prev, price: v }));
  };
  const handleRateChange = (v) => {
    setSearchData((prev) => ({ ...prev, rate: v }));
  };

  const handlePreFetchSearchForm = () => {
    setQueryData((prev) => ({ ...prev, ...searchData }));
  };
  useEffect(() => {
    const handleFetchSearchForm = async (e) => {
      setLoading(true);
      const servicesQuery = () =>
        queryData.services ? `services=${queryData.services}&` : "";
      const cityQuery = () => (queryData.city ? `city=${queryData.city}&` : "");
      const dateQuery = () => (queryData.date ? `date=${queryData.date}&` : "");
      const priceQuery = () =>
        queryData.price ? `price=${queryData.price}&` : "";
      const rateQuery = () => (queryData.rate ? `rate=${queryData.rate}&` : "");

      setError({ status: false, details: {} });
      const url = `${SERVER_ENDPOINT}/users?${servicesQuery()}${cityQuery()}${dateQuery()}${priceQuery()}${rateQuery()}`;
      const fetchURL = url.slice(0, -1);
      
      let response;
      try {
        setLoading(true);
        setError(false);
        response = await (
          await fetch(fetchURL, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          })
        ).json();

        stateSetter(response);
        if (response.error) {
          setError({
            status: true,
            details: { message: response.error.message },
          });
        }

        setLoading(false);
      } catch (err) {}
    };
    handleFetchSearchForm();
  }, [queryData]);
  return {
    searchData,
    handleServiceChange,
    handleCityChange,
    handlePreFetchSearchForm,
    handleDateChange,
    handlePriceChange,
    handleRateChange,
  loading,
  };
};

export default useSearchProviders;
