import { Cookies } from "react-cookie";
const cookies = new Cookies();

export const setCookie = (name, value, days) => {
  const expires = new Date();

  expires.setUTCDate(expires.getUTCDate() + days); //보관기한
  const StringValue = typeof value === "object" ? JSON.stringify(value) : value;
  return cookies.set(name, StringValue, { path: "/", expires: expires });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const removeCookie = (name, path = "/") => {
  cookies.remove(name, { path });
};
