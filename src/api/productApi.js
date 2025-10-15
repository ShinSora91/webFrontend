import axios from "axios";
import { API_SERVER_HOST } from "./todoApi";
const host = `${API_SERVER_HOST}/api/products`;

export const getList = async (pageParam) => {
  console.log("product list 들어왔다");
  const { page, size } = pageParam;
  const res = await axios.get(`${host}/list`, {
    params: { page: page, size: size },
  });
  console.log("backend로부터 온 데이터", res);
  return res.data;
};

export const postAdd = async (product) => {
  console.log(product);
  const header = { headers: { "Content-Type": "multipart/form-data" } };
  const res = await axios.post(`${host}/`, product, header);
  console.log("backend 로 부터 온 데이터", res);
  return res.data;
};

export const getOne = async (pno) => {
  const res = await axios.get(`${host}/${pno}`);
  return res.data;
};

export const putProduct = async (pno, product) => {
  const header = { headers: { "Content-Type": "multipart-data" } };
  const res = await axios.put(`${host}/${pno}`, product, header);
  return res.data;
};

export const deleteProduct = async (pno) => {
  const res = await axios.delete(`${host}/${pno}`);
  return res.data;
};
