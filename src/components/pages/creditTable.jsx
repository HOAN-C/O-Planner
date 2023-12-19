import React from "react";
import styles from "./CreditTable.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const korSection = ["구분", "전공필수", "전공선택", "전공심화"];
const engSection = ["Separation", "Required", "Optional", "Advanced"];
const korSeparation = ["이수 기준", "이수 학점", "잔여 학점"];
const engSeparation = [
  "Completion Crieria",
  "Completion Credits",
  "Remaining Credits",
];

export default function CreditTable(props) {
  const [data, setData] = useState(null);
  const [section, setSection] = useState(
    props.language ? engSection : korSection
  );
  const [separation, setSparation] = useState(
    props.language ? engSeparation : korSeparation
  );

  const qualification = [33, 36, 70]; //이수 구분 고정

  useEffect(() => {
    // props.setIsLoading(true);
    axios
      .get("//user_info")
      .then((res) => {
        setData(res);
        console.log("CreditTable : " + data);
        props.setIsLoading(false);
      })
      .catch((err) => {
        console.log("Get user info failed");
      });
  }, []);

  useEffect(() => {
    setSection(props.language ? engSection : korSection);
    setSparation(props.language ? engSeparation : korSeparation);
  }, [props.language]);

  var required = 30; //추후 데이터 받아오면 동적 할당
  var optional = 27; //추후 데이터 받아오면 동적 할당
  var advanced = required + optional; //추후 데이터 받아오면 동적 할당
  const remain = [
    qualification[0] - required,
    qualification[1] - optional,
    qualification[2] - advanced,
  ];

  const creditData = [
    [separation[0], qualification[0], qualification[1], qualification[2]],
    [separation[1], required, optional, advanced],
    [separation[2], remain[0], remain[1], remain[2]],
  ];

  return (
    <table className={styles.tableContainer}>
      {/*구분 출력*/}
      <thead>
        <tr className={styles.tableHeader}>
          {section.map((item, index) => (
            <th className={styles.tableCell} key={index}>
              {item}
            </th>
          ))}
        </tr>
      </thead>
      {/* 정보 출력 */}
      <tbody>
        {creditData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className={styles.tableCell}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
