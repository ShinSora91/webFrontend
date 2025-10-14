// import React, { useRef, useState } from "react";
// import { postAdd } from "../../api/addressApi";

// const initState = { city: "", gu: "", dong: "", name: "", age: 0, files: [] };
// const AddComponent = () => {
//   const [address, setAddress] = useState({ ...initState });
//   const uploadRef = useRef();
//   const handleChangeAddress = (e) => {
//     const { name, value } = e.target;
//     address[name] = value;
//     setAddress({ ...address });
//   };
//   const handleAddClick = (e) => {
//     console.log(address);
//     const files = uploadRef.current.files;
//     const formData = new FormData();
//     for (let i = 0; i < files.length; i++) {
//       formData.append("files", files[i]);
//     }
//     formData.append("city", address.city);
//     formData.append("gu", address.gu);
//     formData.append("dong", address.dong);
//     formData.append("name", address.name);
//     formData.append("age", address.age);
//     console.log(formData);
//     postAdd(formData);
//   };
//   return (
//     <div className="border-2 border-sky-200 mt-10 m-2 p-4">
//       <div className="flex justify-center">
//         <div className="relative mb-4 flex w-full flex-wrap items-stretch">
//           <div className="w-1/5 p-6 text-right font-bold">city</div>
//           <input
//             type="text"
//             name="city"
//             value={address.city}
//             onChange={handleChangeAddress}
//             className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
//           />
//         </div>
//       </div>
//       <div className="flex justify-center">
//         <div className="relative mb-4 flex w-full flex-wrap items-stretch">
//           <div className="w-1/5 p-6 text-right font-bold">gu</div>
//           <input
//             type="text"
//             name="gu"
//             value={address.gu}
//             onChange={handleChangeAddress}
//             className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
//           />
//         </div>
//       </div>
//       <div className="flex justify-center">
//         <div className="relative mb-4 flex w-full flex-wrap items-stretch">
//           <div className="w-1/5 p-6 text-right font-bold">dong</div>
//           <input
//             type="text"
//             name="dong"
//             value={address.dong}
//             onChange={handleChangeAddress}
//             className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
//           />
//         </div>
//       </div>
//       <div className="flex justify-center">
//         <div className="relative mb-4 flex w-full flex-wrap items-stretch">
//           <div className="w-1/5 p-6 text-right font-bold">name</div>
//           <input
//             type="text"
//             name="name"
//             value={address.name}
//             onChange={handleChangeAddress}
//             className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
//           />
//         </div>
//       </div>
//       <div className="flex justify-center">
//         <div className="relative mb-4 flex w-full flex-wrap items-stretch">
//           <div className="w-1/5 p-6 text-right font-bold">age</div>
//           <input
//             type="number"
//             name="age"
//             value={address.age}
//             onChange={handleChangeAddress}
//             className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
//           />
//         </div>
//       </div>
//       <div className="flex justify-center">
//         <div className="relative mb-4 flex w-full flex-wrap items-stretch">
//           <div className="w-1/5 p-6 text-right font-bold">파일</div>
//           <input
//             type="file"
//             name="file"
//             ref={uploadRef}
//             multiple={true}
//             className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
//           />
//         </div>
//       </div>
//       <div className="flex justify-end">
//         <div className="relative mb-4 flex p-4 flex-wrap items-stretch">
//           <button
//             type="button"
//             className="rounded p-4 w-36 bg-blue-500 text-xl text-white"
//             onClick={handleAddClick}
//           >
//             추가
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddComponent;
