import axios from 'axios';
import config from '../../config';
import axiosInstance from './axiosInstance';

export const fetchGames = async () => {
  try {
    const response = await axiosInstance.get('games');
    return response?.data?.data ?? [];
  } catch (error) {
    throw error;
  }
};
export const fetchGameDetails = async (game: string) => {
  try {
    const response = await axiosInstance.get(`games/${game}`);
    return response?.data?.data ?? [];
  } catch (error) {
    throw error;
  }
};

export const customBetsAll = async (medium: any) => {
  try {
    let { data } = await axios.get(
      // `${config.apiURL}admin-panel/challenge?page=1&limit=20&status=Awaited`
      `${config.baseURL}challenge/open?medium=${medium}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        },
      }
    );
    return data;
  } catch (error) {}
};


export const deviceApi = async (body:any) => {
  try {
    let data = await axios.post(`${config.baseURL}user/device/register`, body, {
      headers: {
          'Authorization': `Bearer ${localStorage.getItem("userToken")}`  
      }
    });
    return data;
  } catch (error) {
    console.log(error.message)
  }
}
