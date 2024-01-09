import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PhotoUpload from "../PhotoUpload";
import AccountNav from "../AccountNav";

const PlaceFormPage = () => {
  const { id } = useParams();
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [dec, setDec] = useState("");
  const [redirect, SetReDirect] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/places/" + id).then((res) => {
      const { data } = res;
      setTitle(data.title);
      setAddress(data.address);
      setAddedPhotos(data.photos);
      setDec(data.dec);
    });
  }, [id]);

  const addNewPlace = async (e) => {
    const placeData = {
      title,
      address,
      addedPhotos,
      dec,
    };
    e.preventDefault();
    if (id) {
      await axios.put("/places", {
        id,
        ...placeData,
      });
      SetReDirect(true);
    } else {
      await axios.post("/places", {
        ...placeData,
      });
      SetReDirect(true);
    }
  };

  if (redirect) {
    return <Navigate to={"/account/places"} />;
  }

  return (
    <div>
      <AccountNav />
      <form onSubmit={addNewPlace}>
        <h2 className="text-xl mt-4">제목</h2>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="제목"
        />
        <h2 className="text-xl mt-4">주소</h2>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder="주소"
        />
        <h2 className="text-xl mt-4 ">사진</h2>
        <PhotoUpload addedPhotos={addedPhotos} onChange={setAddedPhotos} />
        <h2 className="text-xl mt-4">설명</h2>
        <input
          type="text"
          placeholder="사진에 대한 간단한 설명을 적어주세요."
          value={dec}
          onChange={(e) => setDec(e.target.value)}
        />
        <button className="primary my-4">저장하기</button>
      </form>
    </div>
  );
};

export default PlaceFormPage;
