import Timetable from "react-timetable-events";
import styles from "./TimeTableList.module.css";
import { useEffect, useState } from "react";

export default function TimeTableList() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {}, []);
  return (
    <div className={styles.container}>
      {/* <div>&gt;</div>
      <div>&lt;</div> */}
      <Timetable
        events={{
          monday: [
            {
              id: 1,
              name: "소프트웨어공학",
              type: "custom",
              startTime: new Date("2018-02-23T11:30:00"),
              endTime: new Date("2018-02-23T13:30:00"),
            },
            {
              id: 2,
              name: "심화프로그래밍",
              type: "custom",
              startTime: new Date("2018-02-23T14:00:00"),
              endTime: new Date("2018-02-23T16:30:00"),
            },
          ],
          tuesday: [
            {
              id: 1,
              name: "소프트웨어공학",
              type: "custom",
              startTime: new Date("2018-02-23T11:30:00"),
              endTime: new Date("2018-02-23T13:30:00"),
            },
            {
              id: 2,
              name: "심화프로그래밍",
              type: "custom",
              startTime: new Date("2018-02-23T14:00:00"),
              endTime: new Date("2018-02-23T16:30:00"),
            },
          ],
          wednesday: [
            {
              id: 1,
              name: "소프트웨어공학",
              type: "custom",
              startTime: new Date("2018-02-23T11:30:00"),
              endTime: new Date("2018-02-23T13:30:00"),
            },
            {
              id: 2,
              name: "심화프로그래밍",
              type: "custom",
              startTime: new Date("2018-02-23T14:00:00"),
              endTime: new Date("2018-02-23T16:30:00"),
            },
          ],
          thursday: [],
          friday: [],
        }}
        timeLabel="O'Planner"
        hoursInterval={{ from: 9, to: 17 }}
        headerAttributes={{ style: { fontSize: "0.8rem", color: "white" } }}
        bodyAttributes={{ style: { fontSize: "1.4rem", color: "white" } }}
        style={{
          borderRadius: "7px",
          height: "700px",
          width: "700px",
          color: "white",
          fontSize: "2rem",
        }}
      />
    </div>
  );
}
