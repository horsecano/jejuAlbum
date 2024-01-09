import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import PlacePage from "./PlacePage";
import AccountNav from "../AccountNav";

const AccountPage = () => {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);
  const { pathname } = useLocation();
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  const logout = async () => {
    await axios.post("http://15.164.233.61:4000/logout");
    setRedirect("/");
    setUser(null);
  };

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div>
      <AccountNav />
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto py-6">
          {user.name} ({user.email})으로 로그인하셨군요! <br />
          <button onClick={logout} className="primary max-w-sm mt-2">
            로그아웃
          </button>
        </div>
      )}
      {subpage === "places" && <PlacePage />}
    </div>
  );
};

export default AccountPage;
