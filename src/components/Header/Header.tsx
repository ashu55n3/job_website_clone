import React, { useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import imgUrl from "../../lib/imgUrl";
import { getAuthToken, getUsername } from "../../lib/localStorage";
import routesConfig from "../../lib/routesConfig";

import "./styles.scss";

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const rightElement = useMemo(() => {
    if (pathname === routesConfig.login.path) {
      return null;
    } else if (getAuthToken() && getUsername()) {
      return (
        <>
        <span>Welcome {getUsername()} !</span>
        <button
          className="btn btn-outline-primary btn-padding"
          onClick={() => {
            localStorage.clear();
            navigate(routesConfig.login.path, { replace: true });
          }}
        >
          Logout
        </button>
        </>
      );
    } else {
      return (
        <Link className="btn btn-outline-primary btn-padding" to={routesConfig.login.path}>
          Login/Signup
        </Link>
      );
    }
  }, [pathname, navigate]);

  return (
    <nav className="header">
      <div className="header-content">
        <Link to={routesConfig.homepage.path}>
          <img src={imgUrl["myJobsLogo"].src} alt={imgUrl["myJobsLogo"].alt} />
        </Link>
        <div className="right-section">{rightElement}</div>
      </div>
    </nav>
  );
}

export default Header;
