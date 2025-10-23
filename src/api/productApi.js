import { API_SERVER_HOST } from "./commonApi";
import jwtAxios from "../utils/jwtUtil";

const host = `${API_SERVER_HOST}/api/products`;

export const getList = async (pageParam) => {
  console.log("product list 들어왔다");
  const { page, size } = pageParam;
  const res = await jwtAxios.get(`${host}/list`, {
    params: { page: page, size: size },
  });
  console.log("backend로부터 온 데이터", res);
  return res.data;
};

export const postAdd = async (product) => {
  console.log(product);
  const header = { headers: { "Content-Type": "multipart/form-data" } };
  const res = await jwtAxios.post(`${host}/`, product, header);
  console.log("backend 로 부터 온 데이터", res);
  return res.data;
};

export const getOne = async (pno) => {
  const res = await jwtAxios.get(`${host}/${pno}`);
  return res.data;
};

export const putProduct = async (pno, product) => {
  const header = { headers: { "Content-Type": "multipart-data" } };
  const res = await jwtAxios.put(`${host}/${pno}`, product, header);
  return res.data;
};

export const deleteProduct = async (pno) => {
  const res = await jwtAxios.delete(`${host}/${pno}`);
  return res.data;
};
