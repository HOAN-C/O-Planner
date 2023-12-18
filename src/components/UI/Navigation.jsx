//상단 페이지 제목, 시간, 한/영 전환 버튼(추후 추가 예정) 네비게이션 바
import React, { useState, useEffect } from "react";
import styles from "./Navigation.module.css";

export default function Navigation(props) {
  const [currentTime, setCurrentTime] = useState(new Date()); //시간 변수

  useEffect(() => {
    const time = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(time);
  }, []); //매 1초 마다 시간 변수 업데이트

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const languageHandler = () => {
    props.setLanguage(!props.language);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1 className={styles.title}>O'Planner</h1>
      </div>
      <div className={styles.rightSide}>
        <button onClick={languageHandler} className={styles.language}>
          {props.language ? "KOR" : "ENG"}
        </button>
        <div className={styles.time}>{formattedTime}</div>
      </div>
    </div>
  );
}
