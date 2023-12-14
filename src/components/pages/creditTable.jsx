import React from "react";
import styles from "./CreditTable.module.css";

const section = ["구분", "전공필수", "전공선택", "졸업학점"];

const creditData = [
  ["이수 기준", 30, 36, 120],
  ["이수 학점", 30, 27, 91],
  ["이수 중 학점", 3, 9, 22],
];

export default function CreditTable() {
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
