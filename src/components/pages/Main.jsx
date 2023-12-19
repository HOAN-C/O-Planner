import { useState } from "react";
import Loading from "./Loading";
import CreditTable from "./CreditTable";
import InfoTable from "./InfoTable";
import styles from "./Main.module.css";
import axios from "axios";
import TimeTableList from "../UI/TimeTableList";

export default function Main(props) {
  //UI관련 state
  const [isLoading, setIsLoading] = useState(false);
  const [showTimeTable, setShowTimeTable] = useState(false);

  //사용자 입력 state
  const [desiredCredits, setDesiredCredits] = useState(0); //숫자
  const [desiredDaysOff, setDesiredDaysOff] = useState([]); //"MON", "TUE", "WED", "THU", "FRI"
  const [desiredLecture, setDesiredLecture] = useState([]); //"과목명", "과목명", "과목명", "과목명"

  //서버 응답 state
  const [data, setData] = useState([
    [
      {
        lecNum: "10896001",
        lecName: "정보보호",
        day: "MON",
        startTime: "14:30:00",
        endTime: "15:45:00",
      },
      {
        lecNum: "08095001",
        lecName: "알고리즘",
        day: "MON",
        startTime: "16:00:00",
        endTime: "17:15:00",
      },
      {
        lecNum: "10896001",
        lecName: "정보보호",
        day: "TUE",
        startTime: "14:30:00",
        endTime: "15:45:00",
      },
      {
        lecNum: "08095001",
        lecName: "알고리즘",
        day: "TUE",
        startTime: "16:00:00",
        endTime: "17:15:00",
      },
    ],
    [
      {
        lecNum: "10896002",
        lecName: "정보보호",
        day: "MON",
        startTime: "13:00:00",
        endTime: "14:15:00",
      },
      {
        lecNum: "08095002",
        lecName: "알고리즘",
        day: "MON",
        startTime: "14:30:00",
        endTime: "15:45:00",
      },
      {
        lecNum: "10896002",
        lecName: "정보보호",
        day: "TUE",
        startTime: "13:00:00",
        endTime: "14:15:00",
      },
      {
        lecNum: "08095002",
        lecName: "알고리즘",
        day: "TUE",
        startTime: "14:30:00",
        endTime: "15:45:00",
      },
    ],
    [
      {
        lecNum: "10896001",
        lecName: "정보보호",
        day: "MON",
        startTime: "14:30:00",
        endTime: "15:45:00",
      },
      {
        lecNum: "08095005",
        lecName: "알고리즘",
        day: "TUE",
        startTime: "11:00:00",
        endTime: "14:15:00",
      },
      {
        lecNum: "10896001",
        lecName: "정보보호",
        day: "TUE",
        startTime: "14:30:00",
        endTime: "15:45:00",
      },
    ],
  ]);

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
    if (desiredLecture[0] == null) {
      alert("양식을 체워주세요");
      return;
    }
    console.log({
      desiredCredits: desiredCredits,
      desiredDaysOff: desiredDaysOff,
      desiredLecture: desiredLecture,
    });
    setShowTimeTable(true);

    axios
      .post("/recommend", {
        desiredCredits: desiredCredits, //number로 형 변환 후 보낼 것!
        desiredDaysOff: desiredDaysOff,
        desiredLecture: desiredLecture,
      })
      .then((res) => {
        // console.log("실행할 코드");
        setData(res);
      })
      .catch((error) => {
        console.error("에러 발생:", error);
      });
  };

  const closeModal = () => {
    setShowTimeTable(false);
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
            {/* 수강 희망 학점 */}
            <div className={styles.input}>
              <h3>{props.language ? "Desired Credit" : "수강 희망 학점"}</h3>
              <input
                className={styles.inputbox}
                type="number"
                value={desiredCredits}
                onChange={handleCreditChange}
                min={3}
                max={21}
              />
            </div>
            {/* 희망 공강 요일 */}
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
                    checked={desiredDaysOff.includes("FRI")}
                    onChange={() => handleDayToggle("FRI")}
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
      {showTimeTable && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <TimeTableList data={data}/>
            <span className={styles.closeButton} onClick={closeModal}>
              &times;
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
