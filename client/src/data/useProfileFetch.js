import { useState, useContext } from "react";
import { SERVER_ENDPOINT } from "../config";
import UserContext from "./UserContext";

export const useProfileFetch = () => {
  const { handleLoggedInUser } = useContext(UserContext);
  /*   const [fetchedProfile, setProfile] = useState({}); */
  const [error, setError] = useState(false);

  const fetchUser = async (id) => {
    setError(false);
    /*     setLoading(true); */
    try {
      const profile = await (
        await fetch(`${SERVER_ENDPOINT}/users/${id}`, {
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        })
      ).json();
      if (profile) handleLoggedInUser(true, { ...profile });
    } catch (err) {
      setError(err);
    }
  };
  return { fetchUser, error };
};
