import { useEffect, useState } from "react";
import Loading from "./Loading";
import CreditTable from "./CreditTable";
import InfoTable from "./InfoTable";
import styles from "./Main.module.css";
import axios from "axios";
import Timetable from "../UI/TimeTable";

export default function Main(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [desiredCredits, setDesiredCredits] = useState(0); //숫자
  const [desiredDaysOff, setDesiredDaysOff] = useState([]); //"MON", "TUE", "WED", "THU", "FRI"
  const [desiredLecture, setDesiredLecture] = useState([]); //"과목명", "과목명", "과목명", "과목명"

  const handleCreditChange = (e) => {
    const credits = parseInt(e.target.value, 10);
    setDesiredCredits(credits);
  };

  const handleDayToggle = (day) => {
    // 이미 선택된 요일인지 확인
    const isSelected = desiredDaysOff.includes(day);

    // 선택된 요일이 최대 4개 미만일 때 토글
    if (!isSelected && desiredDaysOff.length >= 4) {
      alert("공강 요일은 최대 4개까지 선택 가능합니다.");
    } else {
      setDesiredDaysOff((prevDays) =>
        isSelected
          ? prevDays.filter((selectedDay) => selectedDay !== day)
          : [...prevDays, day]
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      desiredCredits: desiredCredits, //number로 형 변환 후 보낼 것!
      desiredDaysOff: desiredDaysOff,
      desiredLecture: desiredLecture,
    });
    // axios
    //   .post("/recommend", {
    //     desiredCredits: desiredCredits, //number로 형 변환 후 보낼 것!
    //     desiredDaysOff: desiredDaysOff,
    //     desiredLecture: desiredLecture,
    //   })
    //   .then((response) => {
    //     console.log("실행할 코드");
    //   });
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <div className={styles.title}>
            <h1 className={styles.titleText}>
              {props.language ? "Earned Credit" : "취득 학점"}
            </h1>
          </div>
          <CreditTable
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            language={props.language}
          />
          <div className={styles.title}>
            <h1 className={styles.titleText}>
              {props.language ? "Generate Timetable" : "시간표 생성"}
            </h1>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.input}>
              <h3>{props.language ? "Hope Credit" : "수강 희망 학점"}</h3>
              <input
                className={styles.inputbox}
                type="number"
                value={desiredCredits}
                onChange={handleCreditChange}
                min={3}
                max={25}
              />
            </div>
            <div className={styles.input}>
              <h3>{props.language ? "Desired Holiday" : "희망 공강 요일"}</h3>
              <div className={styles.daybox}>
                <label className={styles.daybox}>
                  <input
                    type="checkbox"
                    checked={desiredDaysOff.includes("MON")}
                    onChange={() => handleDayToggle("MON")}
                  />
                  {props.language ? "MON" : "월"}
                </label>
                <label className={styles.daybox}>
                  <input
                    type="checkbox"
                    checked={desiredDaysOff.includes("TUE")}
                    onChange={() => handleDayToggle("TUE")}
                  />
                  {props.language ? "TUE" : "화"}
                </label>
                <label className={styles.daybox}>
                  <input
                    type="checkbox"
                    checked={desiredDaysOff.includes("WED")}
                    onChange={() => handleDayToggle("WED")}
                  />
                  {props.language ? "WED" : "수"}
                </label>
                <label className={styles.daybox}>
                  <input
                    type="checkbox"
                    checked={desiredDaysOff.includes("THU")}
                    onChange={() => handleDayToggle("THU")}
                  />
                  {props.language ? "THU" : "목"}
                </label>
                <label className={styles.daybox}>
                  <input
                    type="checkbox"
                    checked={desiredDaysOff.includes("FIR")}
                    onChange={() => handleDayToggle("FIR")}
                  />
                  {props.language ? "FRI" : "금"}
                </label>
              </div>
            </div>
          </div>
          <InfoTable
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            desiredCredits={desiredCredits}
            desiredLecture={desiredLecture}
            setDesiredLecture={setDesiredLecture}
            language={props.language}
          />
          <button onClick={handleSubmit} className={styles.button}>
            {props.language ? "Generate" : "시간표 생성"}
          </button>
        </div>
      )}
      <Timetable />
    </div>
  );
}
