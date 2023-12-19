import styles from "./InfoTable.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const dummyLectureData = [
  { name: "소프트웨어공학", type: "Required", credit: "3" },
  { name: "응용SW서비스", type: "Required", credit: "3" },
  { name: "정보보호개론", type: "Required", credit: "3" },
  { name: "IT특강", type: "Optional", credit: "3" },
  { name: "SW테스트", type: "Optional", credit: "3" },
  { name: "데이터마이닝", type: "Optional", credit: "3" },
  { name: "데이터분석처리", type: "Optional", credit: "3" },
  { name: "디지털콘텐츠기획", type: "Optional", credit: "3" },
  { name: "모바일프로그래밍", type: "Optional", credit: "3" },
  { name: "빅데이터", type: "Optional", credit: "3" },
  { name: "스마트기기시스템", type: "Optional", credit: "3" },
  { name: "알고리즘", type: "Optional", credit: "3" },
  { name: "웹프로그래밍", type: "Optional", credit: "3" },
  { name: "응용SW연동", type: "Optional", credit: "3" },
  { name: "인공지능", type: "Optional", credit: "3" },
  { name: "정보보호", type: "Optional", credit: "3" },
  { name: "제품소프트웨어패키징", type: "Optional", credit: "3" },
  { name: "현장실습연계프로젝트", type: "Optional", credit: "3" },
];

export default function InfoTable(props) {
  const [data, setData] = useState(dummyLectureData);

  useEffect(() => {
    // props.setIsLoading(true);
    axios
      .get("/lecture_infos")
      .then((res) => {
        setData(res);
        console.log("InfoTable : " + data);
        props.setIsLoading(false);
      })
      .catch((err) => {
        console.log("Get lecture info failed");
      });
  });

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
        {data.map((item, index) => (
          <tr key={index}>
            <td className={styles.checkBoxTableCell}>
              <input
                type="checkbox"
                checked={props.desiredLecture.includes(item.name)}
                onChange={() => handleCheckboxChange(item.name)}
              />
            </td>
            <td className={styles.tableCell}>{item.name}</td>
            <td className={styles.tableCell}>{(item.type === "Required") ? "전필" : "전선"}</td>
            <td className={styles.tableCell}>{item.credit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
