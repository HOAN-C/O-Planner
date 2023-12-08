// Table.js

import React from "react";
import styles from "./Table.module.css"; // Import the CSS module

const section = [
  "기초교양(교양 필수)",
  "기초교양(창의와 융합)",
  "인간과예술(융합)",
  "사회와역사(융합)",
  "자연과학(융합)",
  "세계와언어(융합)",
  "자유교양",
  "계열교양",
  "전공필수",
  "전공선택",
  "졸업학점",
];

const data = [
  [14, 4, 0, 2, 2, 2, 0, 9, 30, 36, 120],
  [15, 4, 0, 2, 2, 2, 0, 9, 30, 27, 91],
  [1, 0, 0, 0, 2, 0, 0, 0, 3, 9, 22],
];

export default function Table() {
  return (
    <table className={styles.tableContainer}>
      <thead>
        <tr>
          {section.map((item, index) => (
            <th key={index} className={styles.tableHeader}>
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
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
