import styles from "./InfoTable.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const dummyLectureData = [
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
    name: "파이썬",
    type: "전공선택",
    credit: "3",
  },
  {
    name: "운영체제",
    type: "전공선택",
    credit: "3",
  },
  {
    name: "심화프로그래밍",
    type: "전공선택",
    credit: "3",
  },
  {
    name: "JAVA",
    type: "전공필수",
    credit: "3",
  },
  {
    name: "소프트웨어공학",
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
  }, [dummyLectureData]);

  const handleCheckboxChange = (name) => {
    // 체크박스 토글 로직
    const isChecked = props.desiredLecture.includes(name);

    // 최대 선택 갯수 제한 (desiredCredits / 3)
    if (props.desiredCredits === 0) {
      alert("수강 희망 학점을 먼저 입력해 주세요");
    } else if (
      !isChecked &&
      props.desiredLecture.length > props.desiredCredits / 3
    ) {
      alert(
        `최대 ${Math.floor(props.desiredCredits / 3) + 1}개 선택 가능합니다.`
      );
    } else {
      props.setDesiredLecture((prevSelected) =>
        isChecked
          ? prevSelected.filter((lecture) => lecture !== name)
          : [...prevSelected, name]
      );
    }
    console.log(props.desiredLecture);
  };

  return (
    <table className={styles.tableContainer}>
      {/* 구분 출력 */}
      <thead>
        <tr className={styles.tableHeader}>
          <th className={styles.checkBoxTableCell}>
            {props.language ? "Selection" : "선택"}
          </th>
          <th className={styles.tableCell}>
            {props.language ? "Lecture" : "강의명"}
          </th>
          <th className={styles.tableCell}>
            {props.language ? "Classification" : "이수구분"}
          </th>
          <th className={styles.tableCell}>
            {props.language ? "Credit" : "학점"}
          </th>
        </tr>
      </thead>
      {/* 정보 출력 */}
      <tbody>
        {dummyLectureData.map((item, index) => (
          <tr key={index}>
            <td className={styles.checkBoxTableCell}>
              <input
                type="checkbox"
                checked={props.desiredLecture.includes(item.name)}
                onChange={() => handleCheckboxChange(item.name)}
              />
            </td>
            <td className={styles.tableCell}>{item.name}</td>
            <td className={styles.tableCell}>{item.type}</td>
            <td className={styles.tableCell}>{item.credit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
