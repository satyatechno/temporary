import axios from 'axios';
import config from '../../config';
import axiosInstance from './axiosInstance';
import Cookies from 'js-cookie'; 

export const fetchGames = async () => {
  try {
    const response = await axiosInstance.get('games');
    return response?.data?.data ?? [];
  } catch (error) {
    throw error;
  }
};

export const activeWalletApi = async () => {
    try {
      let { data } = await axiosInstance.get('user/wallet/active/wallet');
      return data;
    } catch (error) { }
};

export const getUserApi = async () => {
  try {
    let { data } = await axios.get(`${config.baseURL}user/get/details`, {
      headers: {
          'Authorization': `Bearer ${Cookies.get("userToken")}`  
      }
    });
    return data;
  } catch (error) { }
};

export const FetchTournament = async (userId:any) => {
  try {
    let { data } = await axios.get(`${config.baseURL}tournament?status=RUNNING&address=${userId}`,{
     headers:{ 
      'Authorization': `Bearer ${Cookies.get("userToken")}` 
      }
    });
    console.log("bearer token", Cookies.get("userToken") );
    return data;
  } catch (error) {
    console.log(error);
  }
}
export const FetchPastTournament = async (page:any, limit = 9) => {
  try {
    let { data } = await axios.get(`${config.baseURL}tournament?status=PAST&page=${page}&limit=${limit}`);
    return data;
  } catch (error) { }
};

export const TournamentData = async (tournament_id:any, user_id = undefined, page:any, limit:any) => {
  const useData =  Cookies.get("user") ?? null;
  const user = JSON.parse(useData)
  try {
    let { data } = await axios.get(`${config.baseURL}tournament/participates/${tournament_id}?page=${page}&limit=${limit}`, { params: user?.uuid ? { uuid: user?.uuid } : {},
    headers: {
      'Authorization': `Bearer ${Cookies.get("userToken")}` 
    } });
   
    return data;
  } catch (error) { }
};


// export const TournamentData = async (tournament_id, user_id = undefined, page, limit) => {
//   const useData = typeof window !== 'undefined' ? localStorage.getItem("user") : null
//   const user = JSON.parse(useData)
//   try {
//     let { data } = await axios.get(`${config.apiURL}tournament/participates/${tournament_id}?page=${page}&limit=${limit}`, { params: user?.uuid ? { uuid: user?.uuid } : {},
//     headers: {
//       'Authorization': `Bearer ${localStorage.getItem("userToken")}` 
//     } });
   
//     return data;
//   } catch (error) { }
// };






export const fetchGameDetails = async (game: string) => {
  try {
    const response = await axiosInstance.get(`games/${game}`);
    return response?.data?.data ?? [];
  } catch (error) {
    throw error;
  }
};
export const openChalangesApi = async (game: string) => {
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
          Authorization: `Bearer ${Cookies.get('userToken')}`,
        },
      }
    );
    return data;
  } catch (error) {}
};

export const deviceApi = async (body: any) => {
  try {
    let data = await axios.post(`${config.baseURL}user/device/register`, body, {
      headers: {
          'Authorization': `Bearer ${Cookies.get("userToken")}`  
      }
    });
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};
