// import React, { useEffect, useState } from "react";
// import useCustomMove from "../../hooks/useCustomMove";
// import { getOneData } from "../../api/scoreApi";

// const initState = {
//   sno: 0,
//   korea: 0,
//   math: 0,
//   eng: 0,
//   total: 0.0,
//   avg: 0.0,
//   grade: "",
// };
// const SReadComponent = ({ sno }) => {
//   const [score, setScore] = useState(initState);
//   // const { moveToList, moveToModify } = useCustomMove();

//   useEffect(() => {
//     getOneData(sno).then((data) => {
//       console.log("data", data);
//       setScore(data);
//     });
//   }, []);

//   return (
//     <div className="font-bold">
//       [{score.sno}] 국어: {score.korea}, 수학: {score.math}, 영어: {score.eng},{" "}
//       총점: {score.total}, 평균: {score.avg}, 등급: {score.grade}
//     </div>
//   );
// };

// export default SReadComponent;
