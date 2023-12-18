import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import CreditTable from "./CreditTable";
import InfoTable from "./InfoTable";
import styles from "./Main.module.css";

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/lecture_infos")
      .then((res) => {
        setData(res);
        console.log(res);
        setIsLoading(false);
      })
      .catch((err) => {
        alert("Login failed:", err);
      });
  }, []);

  return (
    <div>
      {isLoading ? ( //로딩 중 이라면 로딩 화면 출력
        <Loading />
      ) : (
        //로딩 완료 시 아래 컴포넌트 출력
        <div className={styles.container}>
          <CreditTable /> {/* 이수 구분 컴포넌트 */}
          <div>
            <h1>설문조사</h1>
          </div>
          {/* 원하는 수강 학점 */}
          <p>원하는 수강 학점</p>
          {/* 원하는 공강 요일 */}
          <p>원하는 공강 요일</p>
          <form>
            <div></div>
          </form>
          <InfoTable /> {/* 강의 정보, 시간표 출력 컴포넌트(예정) */}
          <button className={styles.button}>시간표 생성</button>
        </div>
      )}
    </div>
  );
}
