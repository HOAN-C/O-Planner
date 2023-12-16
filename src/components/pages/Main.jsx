import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Loading from "./Loading";
import CreditTable from "./creditTable";
import InfoTable from "./InfoTable";
import styles from "./Main.module.css";

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleSurveyButtonClick = () => {
    navigate('./surveyForm'); // 버튼 클릭 시 /surveyForm으로 이동
  };

  setTimeout(() => setIsLoading(false), 3500);
  return (
    <div>
      {isLoading ? ( //로딩 중 이라면 로딩 화면 출력
        <Loading />
      ) : (
        //로딩 완료 시 아래 컴포넌트 출력
        <div className={styles.container}>
          <CreditTable /> {/* 이수 구분 컴포넌트 */}
          <InfoTable /> {/* 강의 정보, 시간표 출력 컴포넌트(예정) */}
          <button className={styles.button1}>시간표 생성</button>
          <button className={styles.button2} onClick={handleSurveyButtonClick}>설문 조사</button>
        </div>
      )}
    </div>
  );
}