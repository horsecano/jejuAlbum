import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setReDirect] = useState(false);
  const { setUser } = useContext(UserContext);
  const handleLoginSubmmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://http://52.78.143.33/login", { email, password });

      if (data) {
        alert("로그인 성공");
        setUser(data);
        setReDirect(true);
      }
    } catch (error) {
      alert("로그인 실패");
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">로그인</h1>
        <form
          className="max-w-md mx-auto"
          action=""
          onSubmit={handleLoginSubmmit}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력해주세요."
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해주세요."
          />
          <button className="primary">로그인</button>
          <div className="text-center py-2 text-gray-500">
            계정이 아직 없으신가요?{" "}
            <Link className="underline text-black" to={"/register"}>
              등록하기
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
