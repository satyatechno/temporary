import { fetchGames } from "../games/FetchGameServer";
import PlaygameClient from "./PlaygameClient";

const PlayGamePage = async ({ searchParams }: any) => {
  const games = await fetchGames({ next: { revalidate: 60 } }); // ISR

  const searchedGame = searchParams?.game;

  const gameDetails = games.find((item: any) => item?.name === searchedGame);

  return <PlaygameClient games={gameDetails} />;
};

export default PlayGamePage;

