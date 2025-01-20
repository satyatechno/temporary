
import BackgroundIcons from "@/components/Games/BackgroundIcons/BackgroundIcons";
import OneVsOne from "@/components/Games/OneVsOne/OneVsOne";
import OpenChallenges from "@/components/Games/OpenChallenges/OpenChallenges";
import PlayWithFriends from "@/components/Games/PlayWithFriends/PlayWithFriends";
import config from "../../../../config";

async function fetchGames() {
  const baseUrl = config.baseURL;
  try {
    const response = await fetch(`${baseUrl}games`, {
      cache: "force-cache",
    }); // Use `no-store` to avoid caching if needed
    if (!response.ok) {
      throw new Error("Failed to fetch home data");
    }
    const data = await response.json();
    return data?.data;
  } catch (error) {
    console.error("Error fetching home data:", error);
    return null;
  }
}

const GameDetails = async ({ game }: any) => {
  
  const games = await fetchGames();

  const fetchGameDetails = (game: string) => {
    const gameDetails = games.find((item: any) => item?.name === game);
    return gameDetails;
  };

  const gameDetails = fetchGameDetails(game);

  return (
    <>
      <BackgroundIcons img={gameDetails?.gameStageLayerIcon} />
      <OpenChallenges gameDetails={gameDetails} />
      <OneVsOne gameDetails={gameDetails} />
      <PlayWithFriends gameDetails={gameDetails} />
    </>
  );
};

export default GameDetails;
