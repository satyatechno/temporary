import axios from "axios";
import config from "../../config";

export const fetchGames = async () => {
  let data;
  try {
    const response = await axios.get(`${config.baseURL}games`);
    data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};


export const customBetsAll = async (medium:any) => {
  try {
    let { data } = await axios.get(
      // `${config.apiURL}admin-panel/challenge?page=1&limit=20&status=Awaited`
      `${config.baseURL}challenge/open?medium=${medium}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("userToken")}`  
        }
      }
    );
    return data;
  } catch (error) { }
};
