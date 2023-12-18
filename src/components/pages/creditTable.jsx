import React from "react";
import styles from "./CreditTable.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const section = ["구분", "전공필수", "전공선택", "전공심화"];

const creditData = [
  ["이수 기준", 30, 36, 70],
  ["이수 학점", 30, 27, 57],
  ["잔여 학점", 3, 9, 12],
];

export default function CreditTable(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // props.setIsLoading(true);
    axios
      .get("//user_info")
      .then((res) => {
        setData(res);
        console.log(data);
        props.setIsLoading(false);
      })
      .catch((err) => {
        console.log("Get user info failed");
      });
  }, [creditData]);

  return (
    <table className={styles.tableContainer}>
      {/*구분 출력*/}
      <thead>
        <tr>
          {section.map((item, index) => (
            <th key={index} className={styles.tableHeader}>
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
