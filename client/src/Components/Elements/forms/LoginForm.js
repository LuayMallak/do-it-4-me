import React, { useContext, useEffect } from "react";
import { StyledSignupForm } from "../../Styled-Components/StyledSignupForm";
import { StyledButton } from "../../Styled-Components/StyledButton";
import ErrorMsg from "../shared/ErrorMsg";
import useSignupForm from "../../../data/useSignupForm";
import UserContext from "../../../data/UserContext";
import { Link, useLocation, navigate } from "@reach/router";
import { BROWSER_ENDPOINT, SERVER_ENDPOINT } from "../../../config";
export const LoginForm = () => {
  const location = useLocation();
  const { handleLoggedInUser, user } = useContext(UserContext);
  const {
    userData,
    stateError,
    handleFieldsChange,
    handleLoginForm,
  } = useSignupForm();
  useEffect(() => {
    if (user.logged && location.state && location.state.provideAService) {
      navigate(`${BROWSER_ENDPOINT}/profile`, {
        state: { provideAService: true },
      });
    } else if (user.logged && location.state.profile) {
      navigate(`${BROWSER_ENDPOINT}/profile`);
    } else if (user.logged && location.state.booking) {
      navigate(`${BROWSER_ENDPOINT}/search-result`);
    } else if (user.logged) {
      navigate(-1);
    }
  }, [user]);
  return (
    <StyledSignupForm>
      <form onSubmit={(e) => handleLoginForm(e, handleLoggedInUser)}>
        {stateError.status && (
          <ErrorMsg msg={stateError.details.emailPassword} />
        )}
        <input
          value={userData.email || ""}
          onChange={(e) => handleFieldsChange(e.target)}
          type="email"
          name="email"
          required
          placeholder="Email Address"
        />
        <input
          value={userData.password || ""}
          onChange={(e) => handleFieldsChange(e.target)}
          type="password"
          name="password"
          required
          placeholder="Password"
        />
        <StyledButton type="primary">Submit</StyledButton>
        <Link to="/signup">
          <div className="to-signup">
            Or signup if you don't already have an account
          </div>
        </Link>
      </form>
    </StyledSignupForm>
  );
};

export default LoginForm;
