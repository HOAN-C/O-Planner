import Timetable from "react-timetable-events";
import styles from "./TimeTableList.module.css";
import { useEffect, useState } from "react";

export default function TimeTableList(props) {
  const [displayPage, setDisplayPage] = useState(0);
  const [displayData, setDisplayData] = useState({
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
  });

  useEffect(() => {
    const data = {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
    };

    for (var i in props.data[displayPage]) {
      if (props.data[displayPage][i].day === "MON") {
        data.monday.push({
          id: i,
          name:
            props.data[displayPage][i].lecName +
            props.data[displayPage][i].lecNum,
          type: "custom",
          startTime: new Date(
            `2023-01-01T${props.data[displayPage][i].startTime}`
          ),
          endTime: new Date(`2023-01-01T${props.data[displayPage][i].endTime}`),
        });
      } else if (props.data[displayPage][i].day === "TUE") {
        data.tuesday.push({
          id: i,
          name:
            props.data[displayPage][i].lecName +
            props.data[displayPage][i].lecNum,
          type: "custom",
          startTime: new Date(
            `2023-01-01T${props.data[displayPage][i].startTime}`
          ),
          endTime: new Date(`2023-01-01T${props.data[displayPage][i].endTime}`),
        });
      } else if (props.data[displayPage][i].day === "WEN") {
        data.wednesday.push({
          id: i,
          name:
            props.data[displayPage][i].lecName +
            props.data[displayPage][i].lecNum,
          type: "custom",
          startTime: new Date(
            `2023-01-01T${props.data[displayPage][i].startTime}`
          ),
          endTime: new Date(`2023-01-01T${props.data[displayPage][i].endTime}`),
        });
      } else if (props.data[displayPage][i].day === "THU") {
        data.thursday.push({
          id: i,
          name:
            props.data[displayPage][i].lecName +
            props.data[displayPage][i].lecNum,
          type: "custom",
          startTime: new Date(
            `2023-01-01T${props.data[displayPage][i].startTime}`
          ),
          endTime: new Date(`2023-01-01T${props.data[displayPage][i].endTime}`),
        });
      } else if (props.data[displayPage][i].day === "FRI") {
        data.friday.push({
          id: i,
          name:
            props.data[displayPage][i].lecName +
            props.data[displayPage][i].lecNum,
          type: "custom",
          startTime: new Date(
            `2023-01-01T${props.data[displayPage][i].startTime}`
          ),
          endTime: new Date(`2023-01-01T${props.data[displayPage][i].endTime}`),
        });
      }
    }
    setDisplayData(data);
  }, [displayPage, props.data]);

  function rightArrowClickHandler() {
    console.log("rightArrowClickHandler");
    if (displayPage === props.data.length - 1) {
      setDisplayPage(0);
    } else {
      setDisplayPage((prev) => prev + 1);
    }
  }

  function leftArrowClickHandler() {
    console.log("leftArrowClickHandler");
    if (displayPage === 0) {
      setDisplayPage(props.data.length - 1);
    } else {
      setDisplayPage((prev) => prev - 1);
    }
  }

  return (
    <div className={styles.container}>
      <Timetable
        events={displayData}
        timeLabel="O'Planner"
        hoursInterval={{ from: 9, to: 17 }}
        headerAttributes={{ style: { fontSize: "0.8rem", color: "white" } }}
        bodyAttributes={{ style: { fontSize: "1.4rem", color: "white" } }}
        style={{
          borderRadius: "7px",
          height: "600px",
          width: "80%",
          color: "white",
          fontSize: "2rem",
        }}
      />
      <div className={styles.leftArrow} onClick={leftArrowClickHandler}>
        &lt;
      </div>
      <div className={styles.rightArrow} onClick={rightArrowClickHandler}>
        &gt;
      </div>
    </div>
  );
}
