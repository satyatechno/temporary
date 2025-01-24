'use server';

import config from '../../../config';

export async function fetchGames() {
  const baseUrl = config.baseURL;
  try {
    const response = await fetch(`${baseUrl}games`, {
      // cache: "force-cache",
    }); // Use `no-store` to avoid caching if needed
    if (!response.ok) {
      throw new Error('Failed to fetch home data');
    }
    const data = await response.json();
    return data?.data;
  } catch (error) {
    console.error('Error fetching home data:', error);
    return null;
  }
}
