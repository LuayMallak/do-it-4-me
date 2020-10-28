import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";

// Components ///////////////
import Home from "./Components/views/Home";
import Header from "./Components/Elements/header/Header";
import SearchResult from "./Components/views/SearchResult";
import Profile from "./Components/views/Profile";
import Login from "./Components/views/Login";
import Signup from "./Components/views/Signup";
import ServicesToggler from "./Components/Elements/home/ServicesToggler";
import CardContainer from "./Components/Elements/searchResult/CardContainer";
import NotFound from "./Components/views/NotFound";
import UpdateProfile from "./Components/Elements/profile/UpdateProfile/UpdateProfile"
// Global Style///////////

import { GlobalStyle } from "./Components/Styled-Components/GlobalStyle";


import SearchResultContext from "./data/SearchResultContext";
import UserContext from "./data/UserContext";
import DealsContext from "./data/DealsContext";
import useFetchDeals from "./data/useFetchDeals";

function App() {
  const [refresh, setRefresh] = useState(false);
  const { fetchDeals } = useFetchDeals();
  //LoggedIn User Context
  const [loggedInUser, setLoggedInUser] = useState({});
  const handleLoggedInUser = (logged, user) => {
    setLoggedInUser({ logged: logged, user: { ...user } });
  };
  const contextValue = {
    user: loggedInUser,
    handleLoggedInUser: handleLoggedInUser,
  };

  //searchProviders Context

  const [providers, setProviders] = useState([]);
  const [queryData, setQueryData] = useState({});
  const stateSetter = (array) => {
    setProviders(array);
  };
  const searchResultContextValue = {
    providers,
    stateSetter,
    queryData,
    setQueryData,
  };

  //Deals Context

  const [deals, setDeals] = useState({});
  const [change, setChange] = useState(0);
  const dealsValue = {
    deals: deals,
    setDeals: setDeals,
    change: change,
    setChange: setChange,
  };
  //EFFECTS

  useEffect(() => {
    if (loggedInUser.user && loggedInUser.user._id) {
      window.localStorage.setItem(
        "loggedUser",
        JSON.stringify(loggedInUser.user)
      );
    }
  }, [loggedInUser]);

  useEffect(() => {
    if (document.cookie.includes("loggedIn=true")) {
      const existingUsers = window.localStorage.getItem("loggedUser");
      const user = JSON.parse(existingUsers);
      if (user) {
        handleLoggedInUser(true, user);
      } else {
        handleLoggedInUser(false, undefined);
      }
    }
  }, []);
  useEffect(() => {
    fetchDeals();
  }, []);

  return (
    <UserContext.Provider value={contextValue}>
      <SearchResultContext.Provider value={searchResultContextValue}>
        <DealsContext.Provider value={dealsValue}>
          <>
            <Header refresh={refresh} />

            <Router>
              <Home path="/" />
              <SearchResult path="/search-result" />
              <Login path="/login" />
              <Signup path="/signup" />

              <Profile
                path="/profile"
                refresh={refresh}
                setRefresh={setRefresh}
              />
              <UpdateProfile
                 path="/update-profile"
                refresh={refresh}
                setRefresh={setRefresh}/>
              <CardContainer path="/cardContainer" />
              <ServicesToggler path="/test1" />
              <NotFound default />
            </Router>
            <GlobalStyle />
          </>
        </DealsContext.Provider>
      </SearchResultContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
