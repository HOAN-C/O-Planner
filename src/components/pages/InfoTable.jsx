import styles from "./InfoTable.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const lectureData = [
  {
    name: "P-실무 프로젝트",
    type: "전공선택",
    credit: "3",
  },
  {
    name: "데이터통신",
    type: "전공선택",
    credit: "3",
  },
  {
    name: "고급웹프로그래밍",
    type: "전공선택",
    credit: "3",
  },
  {
    name: "프로그램논리",
    type: "전공필수",
    credit: "3",
  },
  {
    name: "C++",
    type: "전공필수",
    credit: "3",
  },
  {
    name: "P-실무 프로젝트",
    type: "전공선택",
    credit: "3",
  },
  {
    name: "데이터통신",
    type: "전공선택",
    credit: "3",
  },
  {
    name: "고급웹프로그래밍",
    type: "전공선택",
    credit: "3",
  },
  {
    name: "프로그램논리",
    type: "전공필수",
    credit: "3",
  },
  {
    name: "C++",
    type: "전공필수",
    credit: "3",
  },
];

export default function InfoTable(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // props.setIsLoading(true);
    axios
      .get("/lecture_infos")
      .then((res) => {
        setData(res);
        console.log(data);
        props.setIsLoading(false);
      })
      .catch((err) => {
        console.log("Get lecture info failed");
      });
  }, [lectureData]);

  return (
    <table className={styles.tableContainer}>
      {/* 구분 출력 */}
      <thead>
        <tr className={styles.tableHeader}>
          <th className={styles.tableCell}>교과목명</th>
          <th className={styles.tableCell}>이수구분</th>
          <th className={styles.tableCell}>학점</th>
        </tr>
      </thead>
      {/* 정보 출력 */}
      <tbody>
        {lectureData.map((item, index) => (
          <tr key={index}>
            <td className={styles.tableCell}>{item.name}</td>
            <td className={styles.tableCell}>{item.type}</td>
            <td className={styles.tableCell}>{item.credit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
