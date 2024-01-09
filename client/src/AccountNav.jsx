import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const AccountNav = () => {
  const { pathname } = useLocation();
  let subpage = pathname.split("/")?.[2];
  if (subpage === undefined) {
    subpage = "profile";
  }

  return (
    <nav className="w-full flex justify-center mt-8 gap-2">
      <Link
        className={
          subpage === "profile"
            ? "py-2 px-6 bg-primary text-white rounded-full "
            : "bg-gray-100 rounded-full py-2 px-6"
        }
        to={"/account"}
      >
        나의 프로필
      </Link>

      <Link
        className={
          subpage === "places"
            ? "py-2 px-6 bg-primary text-white rounded-full "
            : "bg-gray-100 rounded-full py-2 px-6"
        }
        to={"/account/places"}
      >
        나의 추억
      </Link>
    </nav>
  );
};

export default AccountNav;
