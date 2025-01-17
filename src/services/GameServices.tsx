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
    const { data } = await axiosInstance.get('user/wallet/active/wallet',{
      headers: {
        'Authorization': `Bearer ${Cookies.get('userToken')}`
    }
    });
    return data;
  } catch (error) {
    console.log("erorr in fetching wallet data",error)
  }
};

export const getUserApi = async () => {
  try {
    const { data } = await axios.get(`${config.baseURL}user/get/details`, {
      headers: {
        Authorization: `Bearer ${Cookies.get('userToken')}`,
      },
    });
    return data;
  } catch (error) {
    console.log("erorr in fetching user data",error)
  }
};

export const FetchTournament = async (userId: any) => {
  try {
    const { data } = await axios.get(
      `${config.baseURL}tournament?status=RUNNING&address=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('userToken')}`,
        },
      }
    );
    console.log('bearer token', Cookies.get('userToken'));
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const FetchPastTournament = async (page: any, limit = 9) => {
  try {
    const { data } = await axios.get(
      `${config.baseURL}tournament?status=PAST&page=${page}&limit=${limit}`
    );
    return data;
  } catch (error) {
    console.log("error fetching past tournament", error);

  }
};

export const TournamentData = async (
  tournament_id: any,
  page: any=1,
  limit: any=10
) => {
  const useData = Cookies.get('user') ?? '';
  const user = JSON.parse(useData);
  try {
    const { data } = await axios.get(
      `${config.baseURL}tournament/participates/${tournament_id}?page=${page}&limit=${limit}`,
      {
        params: user?.uuid ? { uuid: user?.uuid } : {},
        headers: {
          Authorization: `Bearer ${Cookies.get('userToken')}`,
        },
      }
    );

    return data;
  } catch (error) {
    console.log("error ", error);

  }
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
    const { data } = await axios.get(
      // `${config.apiURL}admin-panel/challenge?page=1&limit=20&status=Awaited`
      `${config.baseURL}challenge/open?medium=${medium}`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('userToken')}`,
        },
      }
    );
    return data;
  } catch (error:any) {
    console.log(error.message)
  }
};

export const deviceApi = async (body: any) => {
  try {
    const data = await axios.post(`${config.baseURL}user/device/register`, body, {
      headers: {
        Authorization: `Bearer ${Cookies.get('userToken')}`,
      },
    });
    return data;
  } catch (error:any) {
    console.log(error.message);
  }
};
export const gameScoreApi = async (gameId:any) =>
  axiosInstance.post(`challenge/score/${gameId}`);
