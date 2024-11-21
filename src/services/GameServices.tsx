import axios from "axios";
import config from "../../config";

export const FetchGames = async () => {
  const cachedData = await caches.match(`${config.baseURL}games`);
  if (cachedData) {
    const data = await cachedData.json();
    // render cached data
    return data;
  } else {
    let data;
    try {
      const response = await axios.get(`${config.baseURL}games`);
      data = response.data;
    } catch (error) {
      console.error("Error fetching games:", error);
      throw error;
    }
    // Update cache with new data only if fetching succeeded
    if (data) {
      const cache = await caches?.open("my-cache");
      await cache.put(
        `${config.baseURL}games`,
        new Response(JSON.stringify(data))
      );
    }

    // Return the fetched data
    return data;
  }
};

export const fetchGamesNew = async () => {
  let data;
  try {
    const response = await axios.get(`${config.baseURL}games`);
    data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};
