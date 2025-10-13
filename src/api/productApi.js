import axios from "axios";

export const API_SERVER_HOST = "http://localhost:8080";
const prefix = `${API_SERVER_HOST}/api/product`;

// export const getList = async ({ pageParam }) => {
//   console.log("product list 들어왔다");
//   const { page, size } = pageParam;
//   const res = await axios.get(`${prefix}/list`, {
//     params: { page: page, size: size },
//   });
//   console.log("backend로부터 온 데이터", res);
//   return res.data;
// };

export const getList = async ({ a, b }) => {
  console.log("product list 들어왔다", a, b);
  let str = `${prefix}/list`;
  const res = await axios.get(str);
  return res;
};

export const postAdd = async (product) => {
  //{files:[], pdesc:"", pname:"", price:60}
  console.log(product);
  const header = { headers: { "Content-Type": "multipart/form-data" } };
  const res = await axios.post(`${prefix}/`, product, header);
  console.log("backend 로 부터 온 데이터", res);
  return res.data;
};
