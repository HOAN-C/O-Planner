import axios from "axios";
import { useState } from "react";
import logo from "../../src_assets/icon_b.png";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const MAX_USERNAME_LENGTH = 20;
const MAX_PASSWORD_LENGTH = 40;

export default function Login() {
  const [userIdInput, setUserIdInput] = useState("");
  const [userPWInput, setUserPWInput] = useState("");
  const navigate = useNavigate();

  // ID 변수 입력 헨들러
  const idInputHandler = (e) => {
    const value = e.target.value.slice(0, MAX_USERNAME_LENGTH);
    // 영어, 숫자, 특수문자만 허용
    const sanitizedValue = value.replace(
      /[^a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/g,
      ""
    );
    setUserIdInput(sanitizedValue);
  };

  // PW 변수 입력 헨들러
  const pwInputHandler = (e) => {
    const value = e.target.value.slice(0, MAX_PASSWORD_LENGTH);
    // 영어, 숫자, 특수문자만 허용
    const sanitizedValue = value.replace(
      /[^a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/g,
      ""
    );
    setUserPWInput(sanitizedValue);
  };

  const clickHandler = () => {
    // 간단한 클라이언트 측 로그인 유효성 검사
    if (userIdInput.length > 0 && userPWInput.length > 0) {
      // 서버로 로그인 정보 전송
      axios
        .post("login.do", {
          username: userIdInput,
          password: userPWInput,
        })
        .then((response) => {
          // 로그인이 성공하면 메인 페이지로 이동
          navigate("/main");
        })
        .catch((error) => {
          // 서버로부터의 응답이 실패하면 처리 (예: 오류 메시지 표시)
          console.error("Login failed:", error);
        });
    } else {
      // 유효성 검사 실패 시 처리 (예: 오류 메시지 표시)
      console.error("Invalid credentials");
    }
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
