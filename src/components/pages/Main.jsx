import { useState } from "react";
import Loading from "./Loading";

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

export default function Main() {
  // const [isLoading, setIsLoading] = useState(true);

  // setTimeout(setIsLoading(false), 21000);

  return (
    <div>
        <Loading />
      <ul>
        {/* {section.map((item, index) => (
          <li key={index}>{item}</li>
        ))} */}
      </ul>
    </div>
  );
}
