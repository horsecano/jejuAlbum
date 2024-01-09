import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import axios from "axios";
import AudioPlayer from "../Player/AudioPlayer";

const IndexPage = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/places").then((res) => {
      setPlaces(res.data);
    });
  }, []);

  return (
    <div className="mt-8 gap-x-6 gap-y-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {places.length > 0 &&
        places.map((place) => (
          <Link to={"/place/" + place._id}>
            <div className="bg-gray-500 rounded-2xl mb-2 flex hover:scale-105 transition-all">
              {place.photos?.[0] && (
                <img
                  className=" rounded-2xl object-cover aspect-square "
                  src={"http://localhost:4000/uploads/" + place.photos?.[0]}
                />
              )}
            </div>
            <h2 className="text-sm font-bold truncate">{place.title}</h2>
            <h3 className="truncate text-gray-400">{place.address}</h3>
          </Link>
        ))}

    </div>
  );
};

export default IndexPage;
