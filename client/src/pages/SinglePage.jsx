import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const [place, setPlace] = useState(null);
  const { id } = useParams();
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`http://15.164.233.61:4000/places/${id}`).then((res) => {
      setPlace(res.data);
    });
  }, [id]);

  if (!place) {
    return "";
  }

  if (showAllPhotos) {
    return (
      <div className=" absolute inset-0 bg-black text-white  min-h-screen">
        <div className="bg-black p-8 grid gap-4">
          <div>
            <h2 className="lg:text-4xl md:text-2xl sm:text-2xl mr-48">
              {place.title}
            </h2>
            <button
              onClick={() => setShowAllPhotos(false)}
              className="fixed right-4 top-4 flex gap-1 py-2 px-4 rounded-2xl bg-white text-black shadow shadow-black hover:scale-105 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {place?.photos?.length > 0 &&
            place.photos.map((photh) => (
              <div>
                <img
                  className=" rounded-lg"
                  src={`http://15.164.233.61:4000/uploads/${photh}`}
                />
              </div>
            ))}
        </div>
      </div>
    );
  }
  return (
    <div className="mt-4 bg-gray-100 -mx-8 px-8 py-6 ">
      <h1 className="text-3xl">{place.title}</h1>
      <a
        className="flex gap-1 my-3 font-semibold underline"
        target="_blank"
        href={`https://map.naver.com/p/search/${place.address}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>

        {place.address}
      </a>
      <div className=" relative">
        <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
          {place.photos?.[0] && (
            <div>
              <img
                onClick={() => setShowAllPhotos(true)}
                className="aspect-square object-fill w-full p-0 cursor-pointer"
                src={`http://15.164.233.61:4000/uploads/${place.photos?.[0]}`}
                alt=""
              />
            </div>
          )}
          <div className="grid gap-2">
            {place.photos?.[1] && (
              <img
                onClick={() => setShowAllPhotos(true)}
                className="aspect-square object-cover cursor-pointer"
                src={`http://15.164.233.61:4000/uploads/${place.photos?.[1]}`}
                alt=""
              />
            )}
            <div className="overflow-hidden">
              {place.photos?.[2] && (
                <img
                  onClick={() => setShowAllPhotos(true)}
                  className="aspect-square object-cover relative cursor-pointer"
                  src={`http://15.164.233.61:4000/uploads/${place.photos?.[2]}`}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
        <button
          onClick={() => setShowAllPhotos(true)}
          className="flex gap-1 absolute bottom-2 right-2 py-3 px-4 bg-white rounded-2xl shadow-md shadow-gray-500 hover:scale-105 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      <div className="my-4">
        <h2 className=" font-semibold text-2xl">사진 설명</h2>
        {place.dec}
      </div>
    </div>
  );
};

export default SinglePage;
