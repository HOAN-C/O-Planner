import axios from "axios";
import { useEffect, useState } from "react";
import logo from "../../src_assets/icon_b.png";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  useEffect(() => {
    if (props.isLoggedIn == true) {
      navigate("/main");
    }
  }, []);

  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  // ID 변수 입력 헨들러
  const nameInputHandler = (e) => {
    setUserName(e.target.value);
  };

  // PW 변수 입력 헨들러
  const idInputHandler = (e) => {
    setUserId(e.target.value);
  };

  const clickHandler = () => {
    // 서버로 로그인 정보 전송
    axios
      .post("/login.do", {
        username: userName,
        usernumber: userId,
      })
      // 로그인이 성공하면 메인 페이지로 이동
      .then((response) => {
        props.setIsLoggedIn(true);
        navigate("/main");
      })
      // 서버로부터의 응답이 실패하면 처리 (예: 오류 메시지 표시)
      .catch((error) => {
        //에러시 실행구문
        console.error("Login failed:", error);
        alert("Login failed:", error);
      });
  };

  return (
    <div className={styles.card}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <input
        type="text"
        value={userName}
        onChange={nameInputHandler}
        placeholder={props.language ? "Name" : "이름"}
        className={styles.input}
      />
      <input
        type="text"
        value={userId}
        onChange={idInputHandler}
        placeholder={props.language ? "Student Number" : "학번"}
        className={styles.input}
      />
      <button className={styles.button} onClick={clickHandler}>
        {props.language ? "Login" : "로그인"}
      </button>
    </div>
  );
}
