import axios from "axios";

const base_url = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;
const key = `${process.env.NEXT_PUBLIC_NEWS_API_KEY}`;
const headers = {
  "x-api-key": key,
};

export const axiosGet = async ({ url, params }) => {
  const completeUrl = `${base_url}${url}`;
  return axios.get(completeUrl, { params, headers});
};

export const axiosPost = async ({ url, body }) => {
  const completeUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`;
  return axios.post(completeUrl, body, { headers });
};
