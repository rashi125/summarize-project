import axios from "axios";

const API_URL = "http://127.0.0.1:8000/summarize";

export const summarizeText = async (text) => {
  const response = await axios.post(API_URL, { text });
  return response.data;
};