
import { useState, useContext } from "react";
import { SERVER_ENDPOINT } from "../config";
import UserContext from "./UserContext";
import moment from "moment";
import SearchResultContext from "./SearchResultContext";


const useBooking = () => {
  const { queryData } = useContext(SearchResultContext);
  const initialDate = queryData.date || moment().format("YYYY-MM-DD");
  const {  user } = useContext(UserContext);
  const searcher = user.user;
  const [newDeal, setNewDeal] = useState({});
  const [error, setError] = useState({});


  const createDatesArray = (startDate, endDate) => {
    let dates = [];
    let today = moment().format("YYYY-MM-DD")
    let avilabilityStartDay= moment(startDate).format("YYYY-MM-DD")

    let currDate = avilabilityStartDay < today ?moment().startOf("day") :moment(startDate).startOf("day")  ;

    let lastDate = moment(endDate).startOf("day");
     do{
      dates.push(currDate.clone().toDate());
    }while (currDate.add(1, "days").diff(lastDate) < 0)
    const result = dates.map((item) => ({
      key: moment(item)._i,
      value: moment(item).format("YYYY-MM-DD"),
    }));
    return result;
  };

  const handleDateChange = (value, string) => {
    setNewDeal((prev) => ({ ...prev, date: value._id }));
  };

  const handleAddressChange = (text) => {
    setNewDeal((prev) => ({ ...prev, address: text }));
  };

  const handleNoteChange = (text) => {
    setNewDeal((prev) => ({ ...prev, note: text }));
  };

  const handleServiceChange = (value) => {
    setNewDeal((prev) => ({ ...prev, service: value._id }));
  };
  const handelTimeChange = (time, timeString) => {
    setNewDeal((prev) => ({ ...prev, time: timeString }));
  };

  const handelCreateNewDeal = async (providerId, callBack) => {
    try {
      setError({ status: false });
    const newDealData = {
      provider: providerId,
      time: newDeal.time,
      address: newDeal.address || `${searcher.street}, ${searcher.city}`,
      dealDate: newDeal.date || initialDate,
      note: newDeal.note,
      dealService: newDeal.service || queryData.services,
    };

    for (let i in newDealData) {
      if (!newDealData[i]) {
        if (i === "note") continue;
        setError({ status: true, [i]: "must be filled" });
      }
    }

    if (error.status === false) {
        const postedDeal = await (
          await fetch(`${SERVER_ENDPOINT}/deals/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(newDealData),
          })
        ).json();
        console.log("WWW")
        if (postedDeal.error) {
          setError({ serverError: postedDeal.error.message });
        }
        callBack(true);
      }
    } catch (err) {
        setError({ status: true, serverError: err.message });
      }
    
  };

  return {
    newDeal,
    setNewDeal,
    createDatesArray,
    handleAddressChange,
    handleServiceChange,
    handleNoteChange,
    handleDateChange,
    handelCreateNewDeal,
    handelTimeChange,
    setError,
    error,
  };
};

export default useBooking;
