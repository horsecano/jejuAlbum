import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setReDirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://15.164.233.61:4000/register", {
        name,
        email,
        password,
      });
      alert("회원가입 성공, 이제 로그인이 가능해요!");
      setReDirect(true);
      setEmail("");
      setName("");
      setPassword("");
    } catch (error) {
      alert("회원가입 실패, 잠시 후 시도해주세요!");
    }
  };

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">회원가입</h1>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            placeholder="이름을 입력해주세요."
            onChange={(ev) => setName(ev.target.value)}
          />
          <input
            type="email"
            value={email}
            placeholder="이메일을 입력해주세요."
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="비밀번호를 입력해주세요."
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="primary">회원가입</button>
          <div className="text-center py-2 text-gray-500">
            이미 회원가입을 하셨나요?{" "}
            <Link className="underline text-black" to={"/login"}>
              로그인
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
