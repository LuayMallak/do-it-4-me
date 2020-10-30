import React, { useContext, useEffect } from "react";
import { StyledSignupForm } from "../../Styled-Components/StyledSignupForm";
import { StyledButton } from "../../Styled-Components/StyledButton";
import ErrorMsg from "../shared/ErrorMsg";
import useSignupForm from "../../../data/useSignupForm";
import UserContext from "../../../data/UserContext";
import { Link, useLocation, navigate } from "@reach/router";
import { BROWSER_ENDPOINT } from "../../../config";
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
    if (location.state.provideAService && user.logged) {
      navigate(`/profile`, {
        state: { provideAService: true },
      });
    } else if (user.logged && location.state.profile) {
      navigate(`/profile`);
    } else if (user.logged && location.state.booking) {
      navigate(`search-result`);
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
