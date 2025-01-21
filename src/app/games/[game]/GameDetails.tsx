
import BackgroundIcons from "@/components/Games/BackgroundIcons/BackgroundIcons";
import OneVsOne from "@/components/Games/OneVsOne/OneVsOne";
import OpenChallenges from "@/components/Games/OpenChallenges/OpenChallenges";
import PlayWithFriends from "@/components/Games/PlayWithFriends/PlayWithFriends";
import { fetchGames } from "../FetchGameServer";


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
