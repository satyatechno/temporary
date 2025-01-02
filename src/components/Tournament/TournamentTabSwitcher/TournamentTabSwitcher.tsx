"use client";
import { useEffect, useMemo, useState } from "react";
import styles from "./tournamenttabswitcher.module.scss";
import PastTournament from "../PastTournament/PastTournament";
import { FetchPastTournament, FetchTournament } from "@/services/GameServices";
import { useAppContext } from "@/app/Context/AuthContext";
import Button from "@/components/CommonComponent/AnimatedButton/AnimatedButton";
import LiveTournament from "../LiveTournament/LiveTournament";
import TournamentMiniCard from "../TournamentMiniCard/TournamentMiniCard";

const TournamentTabSwitcher = () => {
  const [activeTab, setActiveTab] = useState<"left" | "right">("left");
  const [loading, setLoading] = useState(false);
  const [tournamentList, setTournamentList] = useState<any>();
  const [pastTournamentList, setPastTournamentList] = useState<any>();
  const [pastTournament, setPastTournament] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [page, setPage] = useState(1);


  const { userData }: any = useAppContext();

  const handleTabClick = (direction: "left" | "right") => {
    if (activeTab !== direction) {
      setActiveTab(direction);
    }
  };

  const fetchTour = async () => {
    setLoading(true);
    let { data } = await FetchTournament(userData?.uuid);
    setTournamentList(data);
    setPastTournament(false);
    setLoading(false);
  };

  const fetchPastTour = async (page: any) => {
    // setLoading(true);
    let { data } = await FetchPastTournament(page);
    if (page == 1) {
      // setTournamentList(data?.tournaments);
      setPastTournamentList(data?.tournaments)
    }
    //  else {
    //   setTournamentList((prevList) => [...prevList, ...data?.tournaments]);
    // }
    setPastTournament(true);
    // setLoading(false);
  };

  const handleLoadMore = async () => {
    setPage((prevPage) => prevPage + 1); // Increment page number
  };

  const handleCardSelect = (card: any) => {
    setSelectedCard(card);
  };

  useEffect(() => {
    if (page > 1) {
      fetchPastTour(page); // Fetch more data when page changes
    }
  }, [page]);

  useEffect(() => {
    fetchTour();
  }, []);

 const memoizedTournamentList = useMemo(() => {
  return { tournamentList, pastTournamentList };
}, [tournamentList, pastTournamentList]);


  return (
    <main className={styles.main_container}>
      <div className={styles.wrapper}>
        <div
          className={`${styles.taebSwitch} ${
            activeTab === "left" ? styles.left : styles.right
          }`}
        >
          <div
            className={`${styles.taeb} ${
              activeTab === "left" ? styles.active : ""
            }`}
            onClick={() => {
              handleTabClick("left");
              fetchTour();
            }}
          >
            Live Tournament
          </div>
          <div
            className={`${styles.taeb} ${
              activeTab === "right" ? styles.active : ""
            }`}
            onClick={() => {
              handleTabClick("right");
              fetchPastTour(1);
            }}
          >
            Past Tournament
          </div>
        </div>
      </div>

      {activeTab === "right" ? (
        <div className={styles.past_tournament_container}>
          <PastTournament tournamentList={memoizedTournamentList?.pastTournamentList} />
          {memoizedTournamentList?.pastTournamentList?.length > 8 && (
            <div className={styles.load_more_btn}>
              <Button
                value="Load More"
                onClick={handleLoadMore}
                disabled={loading}
              ></Button>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.live_tournament_container}>
          <div className={styles.live_tournament_upper_container}>
            <LiveTournament tournamentList={memoizedTournamentList?.tournamentList?.tournaments} />
            <div className={styles.tournament_minicard_container}>
              <TournamentMiniCard
                tournamentList={memoizedTournamentList?.tournamentList?.tournaments}
              />
            </div>
          </div>
          <div className={styles.live_tournament_lower_container}>
          <PastTournament tournamentList={memoizedTournamentList?.tournamentList?.tournaments} pastTournament={pastTournament}/>
          </div>
        </div>
      )}
    </main>
  );
};

export default TournamentTabSwitcher;
