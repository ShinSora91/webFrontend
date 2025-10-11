// import React from "react";
// import {
//   createSearchParams,
//   useNavigate,
//   useParams,
//   useSearchParams,
// } from "react-router-dom";
// import SReadComponent from "../../components/score/SReadComponent";

// const SReadPage = () => {
//   const { sno } = useParams();
//   const navigate = useNavigate();
//   const [queryParmas] = useSearchParams();
//   const page = queryParmas.get("page") ? parseInt(queryParmas.get("page")) : 1;
//   const size = queryParmas.get("size") ? parseInt(queryParmas.get("size")) : 10;

//   const queryStr = createSearchParams({ page, size }).toString();

//   return (
//     <div>
//       SReadPage
//       <SReadComponent sno={sno} />
//     </div>
//   );
// };

// export default SReadPage;
