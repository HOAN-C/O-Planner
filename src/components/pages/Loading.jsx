import { useState, useEffect } from "react";
import styles from "./Loading.module.css";

const wiseSaying = [
  "지식에 대한 투자는 최고의 보상을 가져다 줄 것이다. – Benjamin Franklin",
  "많은 실패자들은 포기하기 때문에 성공이 얼마나 가까웠는지 깨닫지 못한다. – Thomas Edison",
  "미루는 것은 쉬운 일을 어렵게 만들고 어려운 일을 더 어렵게 만든다. – Mason Cooley",
  "노력을 대신할 수 있는 것은 없다. – Thomas Edison",
  "더 이상 상황을 바꿀 수 없을 때 우리는 스스로를 변화시켜야 한다. – Viktor Frankl",
  "훌륭한 사람은 레이저 같은 집중력을 가진 평범한 사람이다. – Bruce Lee",
  "진짜 어려움은 극복할 수 있습니다. 정복할 수 없는 것은 상상 속의 것들뿐이다. – Theodore Newton Vail",
  "탁월함은 기술이 아니다. 태도이다. – Ralph Marston",
  "성적이나 결과는 행동이 아니라 습관이다. – Aristotle",
  "미래는 꿈의 아름다움을 믿는 자의 것이다. – Eleanor Roosevelt",
  "더 많이 읽을수록 더 많은 것을 알게 될 것이고 더 많이 배울수록 더 많은 곳을 가게 될 것이다. – Dr. Seuss",
  "끝날 때까지 항상 불가능해 보인다. – Nelson Mandela",
  "성공의 비결은 없다. 성공운 준비와 노력, 실패에서 배운 결과이다. – Colin Luther Powell",
  "성공으로 가는 엘리베이터는 없다. 성공은 계단을 통해서만 도달할 수 있다. – Zig Ziglar",
  "열심히 하면 할수록 행운도 더 많이 온다. – Thomas Jefferson",
  "진짜 가치가 있는 곳으로 가는 지름길은 없다. – Beverly Sills",
  "내가 하는 가장 큰 후회는 한 단어로 요약할 수 있는데, 그것은 ‘미루기’이다. – Ron Cooper",
];

export default function Loading() {
  const [statement, setStatement] = useState(
    wiseSaying[Math.floor(Math.random() * wiseSaying.length)]
  );

  //3.2초 마다 새로운 문장 출력
  useEffect(() => {
    const intervalId = setInterval(() => {
      setStatement(wiseSaying[Math.floor(Math.random() * wiseSaying.length)]);
    }, 3200);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.loadingContainer}>
      <p className={styles.plsWaitText}> 로딩중입니다. 잠시만 기다려주세요.</p>
      <p className={styles.loadingText}>{statement}</p>
    </div>
  );
}
