import React, { useState } from "react";
import logo from "../../src_assets/icon_b.png";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userIdInput, setUserIdInput] = useState("");
  const [userPWInput, setUserPWInput] = useState("");
  const navigate = useNavigate();

  //ID 변수 입력 헨들러
  const idInputHandler = (e) => {
    setUserIdInput(e.target.value);
    console.log(e.target.value);
  };

  //PW 변수 입력 헨들러
  const pwInputHandler = (e) => {
    setUserPWInput(e.target.value);
    console.log(e.target.value);
  };

  const clickHandler = () => {
    //로그인 알고리즘 추가해야 함.
    navigate("/main");
  };

  return (
    <div className={styles.card}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <input
        value={userIdInput}
        onChange={idInputHandler}
        placeholder="아이디"
        className={styles.input}
      />
      <input
        type="password"
        value={userPWInput}
        onChange={pwInputHandler}
        placeholder="비밀번호"
        className={styles.input}
      />
      <button className={styles.button} onClick={clickHandler}>
        Login
      </button>
    </div>
  );
}
