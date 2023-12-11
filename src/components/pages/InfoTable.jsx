import styles from "./InfoTable.module.css";

const lectureData = [
  {
    number: "99735752",
    name: "P-실무 프로젝트",
    type: "전공선택",
    credit: "3",
    time: "월1, 월2",
    class: "AI-509",
  },
  {
    number: "91732571",
    name: "데이터통신",
    type: "전공선택",
    credit: "3",
    time: "수3, 수4",
    class: "AI-501",
  },
  {
    number: "54312562",
    name: "고급웹프로그래밍",
    type: "전공선택",
    credit: "3",
    time: "목5, 목6",
    class: "AI-411",
  },
  {
    number: "29571956",
    name: "프로그램논리",
    type: "전공필수",
    credit: "3",
    time: "금5, 금6",
    class: "AI-312",
  },
  {
    number: "39564273",
    name: "C++",
    type: "전공필수",
    credit: "3",
    time: "화1, 화2",
    class: "AI-210",
  },
  {
    number: "99735752",
    name: "P-실무 프로젝트",
    type: "전공선택",
    credit: "3",
    time: "월1, 월2",
    class: "AI-509",
  },
  {
    number: "91732571",
    name: "데이터통신",
    type: "전공선택",
    credit: "3",
    time: "수3, 수4",
    class: "AI-501",
  },
  {
    number: "54312562",
    name: "고급웹프로그래밍",
    type: "전공선택",
    credit: "3",
    time: "목5, 목6",
    class: "AI-411",
  },
  {
    number: "29571956",
    name: "프로그램논리",
    type: "전공필수",
    credit: "3",
    time: "금5, 금6",
    class: "AI-312",
  },
  {
    number: "39564273",
    name: "C++",
    type: "전공필수",
    credit: "3",
    time: "화1, 화2",
    class: "AI-210",
  },
];

export default function InfoTable() {
  return (
    <table className={styles.tableContainer}>
      <thead>
        <tr className={styles.tableHeader}>
          <th className={styles.tableCell}>학술번호</th>
          <th className={styles.tableCell}>교과목명</th>
          <th className={styles.tableCell}>이수구분</th>
          <th className={styles.tableCell}>학점</th>
          <th className={styles.tableCell}>강의시간</th>
          <th className={styles.tableCell}>강의실</th>
        </tr>
      </thead>
      <tbody>
        {lectureData.map((item, index) => (
          <tr key={index}>
            <td className={styles.tableCell}>{item.number}</td>
            <td className={styles.tableCell}>{item.name}</td>
            <td className={styles.tableCell}>{item.type}</td>
            <td className={styles.tableCell}>{item.credit}</td>
            <td className={styles.tableCell}>{item.time}</td>
            <td className={styles.tableCell}>{item.class}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
