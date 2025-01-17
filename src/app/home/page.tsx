import AlphaPass from "@/components/Home/Alpha Pass/AlphaPass";
import CommingSoon from "@/components/Home/Comming Soon/CommingSoon";
import HomeCarousel from "@/components/Home/HomeCarousel/HomeCarousel";
import LatestP2EGames from "@/components/Home/LatestP2EGames/LatestP2EGames";
import MostPlayed from "@/components/Home/MostPlayed/MostPlayed";
import OpenChallenges from "@/components/Home/OpenChallenges/OpenChallenges";
import PlayBigWinBig from "@/components/Home/PlayBigWinBig/PlayBigWinBig";
import PlayToEarn from "@/components/Home/PlayToEarn/PlayToEarn";
import TopArcadian from "@/components/Home/TopArcadian/TopArcadian";
import styles from "./home.module.scss";
import GameGrid from "@/components/Games/GamesGrid/GamesGrid";
import config from "../../../config";

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

const HomePage = async () => {
  const games = await fetchGames();
  return (
    <main>
      <div className={styles.desktop_screen}>
        <GameGrid />
      </div>
      <div className={styles.mobile_screen}>
        <HomeCarousel gamesData={games} />
        <OpenChallenges />
        <LatestP2EGames gamesData={games} />
        <AlphaPass />
        <MostPlayed  gamesData={games} />
        <PlayToEarn />
        <CommingSoon />
        <TopArcadian />
        <PlayBigWinBig />
      </div>
    </main>
  );
};

export default HomePage;
