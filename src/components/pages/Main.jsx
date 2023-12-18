import { useEffect, useState } from "react";
import Loading from "./Loading";
import CreditTable from "./CreditTable";
import InfoTable from "./InfoTable";
import styles from "./Main.module.css";
import axios from "axios";

export default function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [desiredCredits, setDesiredCredits] = useState(0);
  const [desiredDaysOff, setDesiredDaysOff] = useState([]);
  const [desiredLecture, setDesiredLecture] = useState([]);

  const handleCreditChange = (e) => {
    const credits = parseInt(e.target.value, 10);
    setDesiredCredits(credits);
  };

  const handleDayToggle = (day) => {
    // 이미 선택된 요일인지 확인
    const isSelected = desiredDaysOff.includes(day);

    // 선택된 요일이 최대 4개 미만일 때 토글
    if (!isSelected && desiredDaysOff.length >= 4) {
      alert("최대 4개의 공강 요일까지 선택 가능합니다.");
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
    axios
      .get("/recommend", {
        desiredCredits: desiredCredits, //number로 형 변환 후 보낼 것!
        desiredDaysOff: desiredDaysOff,
        desiredLecture: desiredLecture,
      })
      .then((response) => {
        console.log("실행할 코드");
      });
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <CreditTable isLoading={isLoading} setIsLoading={setIsLoading} />
          <h1>설문조사</h1>

          <p>원하는 수강 학점</p>
          <input
            type="number"
            value={desiredCredits}
            onChange={handleCreditChange}
            min={0}
            max={25}
          />
          <p>원하는 공강 요일</p>
          <div>
            <label>
              <input
                type="checkbox"
                checked={desiredDaysOff.includes("월")}
                onChange={() => handleDayToggle("월")}
              />
              월
            </label>
            <label>
              <input
                type="checkbox"
                checked={desiredDaysOff.includes("화")}
                onChange={() => handleDayToggle("화")}
              />
              화
            </label>
            <label>
              <input
                type="checkbox"
                checked={desiredDaysOff.includes("수")}
                onChange={() => handleDayToggle("수")}
              />
              수
            </label>
            <label>
              <input
                type="checkbox"
                checked={desiredDaysOff.includes("목")}
                onChange={() => handleDayToggle("목")}
              />
              목
            </label>
            <label>
              <input
                type="checkbox"
                checked={desiredDaysOff.includes("금")}
                onChange={() => handleDayToggle("금")}
              />
              금
            </label>
          </div>
          {/* InfoTable 컴포넌트(시간표 출력) */}
          <InfoTable isLoading={isLoading} setIsLoading={setIsLoading} />
          <button onClick={handleSubmit} className={styles.button}>
            시간표 생성
          </button>
        </div>
      )}
    </div>
  );
}
