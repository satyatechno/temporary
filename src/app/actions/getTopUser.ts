import axios from "axios";
import config from "../../../config";

export const getTopUsers = async (sortBy: string = "totalWinAmount") => {
  try {
    const response = await axios.get(`${config.baseURL}user?sort=${sortBy}`);
    return response?.data?.data?.response || [];
  } catch (error) {
    console.error("Error fetching top users:", error);
    return [];
  }
};
