import axios from "axios";

// const url = "http://10.0.2.2:5000/user";
const url = "https://livestockserverapi.herokuapp.com/user";
const url1 = "https://livestockserverapi.herokuapp.com/blog";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getLivestockapi = (id) => {
  return axios.get(`${url}/${id}`);
};

export const postLivestockapi = (data) => {
  return axios.post(url, data);
};

export const deletelivestock = (id) => {
  return axios.delete(`${url}/${id}`);
};

export const updatelivestock = (id, data) => {
  return axios.put(`${url}/${id}`, data);
};

export const getBlogs = () => {
  return axios.get(url1);
};
