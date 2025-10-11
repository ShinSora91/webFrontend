// import React, { useEffect, useState } from "react";
// import useCustomMove from "../../hooks/useCustomMove";
// import { getListData } from "../../api/scoreApi";
// import { Link } from "react-router-dom";

// const initState = {
//   dtoList: [],
//   pageNumList: [],
//   pageRequestDTO: null,
//   prev: false,
//   next: false,
//   totalCount: 0,
//   prevPage: 0,
//   nextPage: 0,
//   totalPage: 0,
//   current: 0,
// };

// const SListComponent = () => {
//   const [serverData, setServerData] = useState(initState);
//   const { page, size } = useCustomMove;

//   useEffect(() => {
//     getListData({ page, size }).then((data) => {
//       console.log(data);
//       setServerData(data);
//     });
//   }, [page, size]);

//   return (
//     <div className="font-bold">
//       SListComponent
//       {serverData.dtoList.map((i) => (
//         <div key={i.sno}>
//           [
//           <Link to={`/todo/sread/${i.sno}`} className="text-red-500">
//             {i.sno}
//           </Link>
//           ] 국어: {i.korea}, 영어: {i.eng}, 수학: {i.math}, 총점: {i.total},
//           평균: {i.avg}, 등급: {i.grade}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SListComponent;
