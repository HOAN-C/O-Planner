import { useEffect, useState } from "react";
import Loading from "./Loading";
import CreditTable from "./CreditTable";
import InfoTable from "./InfoTable";
import styles from "./Main.module.css";
import axios from "axios";

export default function Main() {
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
            <h1 className={styles.titleText}>취득 학점</h1>
          </div>
          <CreditTable isLoading={isLoading} setIsLoading={setIsLoading} />
          <div className={styles.title}>
            <h1 className={styles.titleText}>시간표 생성</h1>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.input}>
              <h3>수강 희망 학점</h3>
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
              <h3>공강 희망 요일</h3>
              <div className={styles.daybox}>
                <label className={styles.daybox}>
                  <input
                    type="checkbox"
                    checked={desiredDaysOff.includes("월")}
                    onChange={() => handleDayToggle("월")}
                  />
                  월
                </label>
                <label className={styles.daybox}>
                  <input
                    type="checkbox"
                    checked={desiredDaysOff.includes("화")}
                    onChange={() => handleDayToggle("화")}
                  />
                  화
                </label>
                <label className={styles.daybox}>
                  <input
                    type="checkbox"
                    checked={desiredDaysOff.includes("수")}
                    onChange={() => handleDayToggle("수")}
                  />
                  수
                </label>
                <label className={styles.daybox}>
                  <input
                    type="checkbox"
                    checked={desiredDaysOff.includes("목")}
                    onChange={() => handleDayToggle("목")}
                  />
                  목
                </label>
                <label className={styles.daybox}>
                  <input
                    type="checkbox"
                    checked={desiredDaysOff.includes("금")}
                    onChange={() => handleDayToggle("금")}
                  />
                  금
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
          />
          <button onClick={handleSubmit} className={styles.button}>
            시간표 생성
          </button>
        </div>
      )}
    </div>
  );
}
