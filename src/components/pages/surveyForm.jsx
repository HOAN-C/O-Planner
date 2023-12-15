import React, { useState } from 'react';
import styles from './SurveyForm.module.css';

const SurveyForm = () => {
  // 각 질문에 대한 상태
  const [credit, setCredit] = useState(0);
  const [selectedTimeslots, setSelectedTimeslots] = useState([]);
  const [professor, setProfessor] = useState('');
  const [priorityCourse, setPriorityCourse] = useState('');
  const [transportation, setTransportation] = useState([]);
  const [selectedDays, setSelectedDays] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
  });

  // 각 질문에 대한 변경 핸들러
  const handleCreditChange = (value) => setCredit(value);
  const handleTimeslotChange = (timeslot) => {
    setSelectedTimeslots((prev) => (prev.includes(timeslot) ? prev.filter((t) => t !== timeslot) : [...prev, timeslot]));
  };
  const handleProfessorChange = (value) => setProfessor(value);
  const handlePriorityCourseChange = (value) => setPriorityCourse(value);
  const handleTransportationChange = (option) => {
    setTransportation((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };
  const handleDayChange = (day) => {
    setSelectedDays((prevSelectedDays) => ({
      ...prevSelectedDays,
      [day]: !prevSelectedDays[day], // 선택 상태 토글
    }));
  };
  const dayNames = ['월요일', '화요일', '수요일', '목요일', '금요일'];
  const handleCheckboxChange = (e) => {
    // 각 체크박스의 변경에 대한 처리를 수행
    console.log(e.target.name, e.target.checked);
  };

  // 설문조사 제출 핸들러
  const handleSubmit = () => {
    // 설문 결과를 처리 로직
    console.log({
      credit,
      selectedDays,
      selectedTimeslots,
      professor,
      priorityCourse,
      transportation,
    });
  };

  return (
    
    <div className={styles.titlecontainer}>
      <h1 className={styles.title}>
        원활한 시간표 생성을 위한 설문입니다.
        <br />
        아래 질문에 대답해주세요.</h1>
        
    <div className={styles.questionContainer}>
      
      <div className={styles.question1}>
        <label>Q1. 수강신청 가능한 학점을 선택해주세요.</label>
        {/* 슬라이더 */}
        <input
        type="range"
        min="0"
        max="25"
        value={credit}
        onChange={(e) => handleCreditChange(e.target.value)} />
        <span>{credit}</span>
      </div>

      <div className={styles.question2}>
      <h3>Q2. 원하는 공강 요일을 선택해주세요. (최대 4개)</h3>
        <div className={styles.dayContainer}>
          {dayNames.map((day) => (
            <div key={day} className={styles.dayOption}>
              <input
                type="checkbox"
                id={day}
                checked={selectedDays[day]}
                onChange={() => handleDayChange(day)}
                disabled={
                  Object.values(selectedDays).filter((selected) => selected).length >= 4 &&
                  !selectedDays[day]
                }
              />
              <label htmlFor={day}>{day}</label>
            </div>
          ))}
        </div>
      </div>
    
      <div className={styles.question3}>
        <label>Q3. 원하는 강의 시간대를 선택해주세요.</label>
        {/* 표 형식 */}
        <table>
          <thead>
            <tr>
              <th></th>
              <th>월</th>
              <th>화</th>
              <th>수</th>
              <th>목</th>
              <th>금</th>
            </tr>
          </thead>
          <tbody>
      {Array.from({ length: 72 }, (_, index) => (
        <tr key={index}>
          <td>
            {`${Math.floor(index / 6) + 9}:${(index % 6) * 10 === 0 ? '00' : (index % 6) * 10}`}
          </td>
          <td>
            <input
              type="checkbox"
              name={`monday-${index}`}
              value={`monday-${index}`}
              onChange={handleCheckboxChange}
            />
          </td>
          <td>
            <input
              type="checkbox"
              name={`tuesday-${index}`}
              value={`tuesday-${index}`}
              onChange={handleCheckboxChange}
            />
          </td>
          <td>
            <input
              type="checkbox"
              name={`wednesday-${index}`}
              value={`wednesday-${index}`}
              onChange={handleCheckboxChange}
            />
          </td>
          <td>
            <input
              type="checkbox"
              name={`thursday-${index}`}
              value={`thursday-${index}`}
              onChange={handleCheckboxChange}
            />
          </td>
          <td>
            <input
              type="checkbox"
              name={`friday-${index}`}
              value={`friday-${index}`}
              onChange={handleCheckboxChange}
            />
          </td>
        </tr>
      ))}
    </tbody>
        </table>
      </div>

      <div className={styles.question4}>
        <label>Q4. 원하는 교수님이 있다면 작성해주세요.</label>
        {/* 텍스트 입력 */}
        <input type="text" value={professor} onChange={(e) => handleProfessorChange(e.target.value)} />
      </div>

      <div className={styles.question5}>
        <label>Q5. 시간표 생성 중 우선시 되었으면 하는 강의명을 작성해주세요.</label>
        {/* 텍스트 입력 */}
        <input type="text" value={priorityCourse} onChange={(e) => handlePriorityCourseChange(e.target.value)} />
      </div>

      <div className={styles.question6}>
        <label>Q6. 강의실간의 이동은 주로 어떻게 이뤄지는지 선택해주세요.</label>
        {/* 체크박스 */}
        {['도보', '자차', '무당이'].map((option) => (
          <div key={option} className={styles.checkboxOption}>
            <input
              type="checkbox"
              id={option}
              checked={transportation.includes(option)}
              onChange={() => handleTransportationChange(option)}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
      </div>
      {/* 설문 제출 버튼 */}
      <button className={styles.button} onClick={handleSubmit}>설문 제출</button>
      </div>
  );
};

export default SurveyForm;
