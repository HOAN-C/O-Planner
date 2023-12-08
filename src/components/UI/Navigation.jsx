// Navigation.js
import React, { useState, useEffect } from "react";
import styles from "./Navigation.module.css";

export default function Navigation(props) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const time = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(time);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1 className={styles.title}>O'Planner</h1>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.time}>{formattedTime}</div>
      </div>
    </div>
  );
}
