import styles from "./TimeTable.module.css";

const Timetable = () => {
  const rows = Array.from({ length: 30 }, (rowIndex) => (
    <tr key={rowIndex}>
      {Array.from({ length: 6 }, (colIndex) => {
        if (colIndex === 0 && rowIndex % 4 === 0) {
          const hour = 9 + Math.floor(rowIndex / 4);
          return <td key={colIndex}>{hour}</td>;
        } else {
          return <td key={colIndex}></td>;
        }
      })}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>시간</th>
          <th>MON</th>
          <th>TUE</th>
          <th>WED</th>
          <th>THU</th>
          <th>FRI</th>
          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Timetable;
