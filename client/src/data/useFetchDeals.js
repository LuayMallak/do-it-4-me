import { useState, useEffect, useContext } from "react";
import { SERVER_ENDPOINT } from "../config";
import DealsContext from "./DealsContext";



export const useFetchDeals = () => {
  const { deals, setDeals, change, setChange } = useContext(DealsContext);
  

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetchDeals();
  }, [change]);
  const handleConfirmDeal = async (dealId) => {
    try {
      const confirmedDeal = await (
        await fetch(`${SERVER_ENDPOINT}/deals/${dealId}/confirm`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        })
      ).json();
      setChange(change + 1);
      if (confirmedDeal) console.log("")
    } catch (err) {
      setError(err);
    }
  };

  const handelRateProvider = async (dealID, providerID, rateValue) => {
    console.log("rate func", dealID, providerID, rateValue);
    try {
      const ratedUser = await (
        await fetch(`${SERVER_ENDPOINT}/users/${providerID}/rate`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ dealId: dealID, rate: rateValue }),
        })
      ).json();
      setChange(change + 1);
      if (ratedUser) console.log("")
    } catch (err) {
      setError("handelUpdateProfile", err);
    }
  };

  const handleCancelDeal = async (dealId) => {
    try {
      const canceledDeals = await (
        await fetch(`${SERVER_ENDPOINT}/deals/${dealId}/cancel`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        })
      ).json();
      setChange(change + 1);
      if (canceledDeals) console.log("")
    } catch (err) {
      setError("handelUpdateProfile", err);
    }
  };

  const fetchDeals = async () => {
    setError(false);
    setLoading(true);
    try {
      
      const dealsArray = await (
        await fetch(`${SERVER_ENDPOINT}/deals`, {
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        })
      ).json();
      if (dealsArray) {
        setDeals(dealsArray);
      }
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  return {
    deals,
    fetchDeals,
    handleCancelDeal,
    handelRateProvider,
    handleConfirmDeal,
    loading,
    error,
  };
};

export default useFetchDeals;
