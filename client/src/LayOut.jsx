import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import AudioPlayer from "./Player/AudioPlayer";

const LayOut = () => {
  return (
    <div className="p-4 px-8 flex flex-col min-h-screen s">
      <Header />
      <Outlet />
      <AudioPlayer />
    </div>
  );
};

export default LayOut;
