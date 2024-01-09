import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AccountNav from "../AccountNav";
import axios from "axios";

const PlacePage = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/user-places").then(({ data }) => {
      setPlaces(data);
    });
  }, []);
  return (
    <div>
      <AccountNav />
      <div className="text-center mt-6">
        <Link
          className="bg-primary inline-flex gap-1 text-white py-2 px-6 rounded-full "
          to={"/account/places/new"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
          새로운 추억 더하기
        </Link>
      </div>
      <div className="mt-4 p-4">
        {places.length > 0 &&
          places.map((place) => (
            <Link
              to={"/account/places/" + place._id}
              className="flex flex-col md:flex-row cursor-pointer bg-gray-200 p-4 rounded-2xl mb-4 hover:bg-gray-100 transition-all"
            >
              <div className="flex w-full md:w-52 h-40 bg-gray-300 rounded-lg mb-2 md:mb-0">
                {place.photos.length > 0 && (
                  <img
                    className="object-cover w-full h-full rounded-xl"
                    src={"http://localhost:4000/uploads/" + place.photos[0]}
                    alt=""
                  />
                )}
              </div>
              <div className=" w-full md:w-auto md:ml-4">
                <h2 className="text-xl">{place.title}</h2>
                <p className="text-sm mt-2">{place.dec}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default PlacePage;
