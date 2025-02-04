import { fetchGames } from "../FetchGameServer";
import GameDetails from "./GameDetails";


const GameStage = async ({ params }: any) => {
  if (!params?.game) {
    return <p>Game parameter is missing</p>;
  }

  //  Fetch data with ISR enabled (Revalidates every 60 seconds)
  const games = await fetchGames({ next: { revalidate: 60 } });

  const gameDetails = games.find((item: any) => item?.name === params.game);

  if (!gameDetails) {
    return <p>Game not found</p>;
  }

  return (
    <main>
      <GameDetails game={params.game} />
    </main>
  );
};

export default GameStage;

/**  Generate static paths for SSG */
export async function generateStaticParams() {
  try {
    const games = await fetchGames();

    if (!games || !Array.isArray(games)) {
      console.error("No games found or invalid data structure");
      return [];
    }

    return games.map((game: any) => (
      {
      game: game.name.toString(), 
    }));
  } catch (error) {
    console.error("Error fetching games for static params:", error);
    return [];
  }
}


