"use client";
import { useEffect, useState } from "react";
import styles from "./tournamenttabswitcher.module.scss";
import PastTournament from "../PastTournament/PastTournament";
import { FetchPastTournament, FetchTournament } from "@/services/GameServices";
import { useAppContext } from "@/app/Context/AuthContext";
import Button from "@/components/CommonComponent/AnimatedButton/AnimatedButton";

const TournamentTabSwitcher = () => {
  const [activeTab, setActiveTab] = useState<"left" | "right">("left");
  const [loading, setLoading] = useState(false);
  const [tournamentList, setTournamentList] = useState();
  const [pastTournament, setPastTournament] = useState(false);
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
    setLoading(true);
    let { data } = await FetchPastTournament(page);
    if (page == 1) {
      setTournamentList(data?.tournaments);
    } else {
      setTournamentList((prevList) => [...prevList, ...data?.tournaments]);
    }
    setPastTournament(true);
    setLoading(false);
  };

  const handleLoadMore = async () => {
    setPage((prevPage) => prevPage + 1); // Increment page number
  };

  useEffect(() => {
    if (page > 1) {
      fetchPastTour(page); // Fetch more data when page changes
    }
  }, [page]);

  useEffect(() => {
    fetchTour();
  }, []);

  return (
    <main className={styles.main_containers}>
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
            onClick={() => {handleTabClick("left"); fetchTour()}}
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

      <div className={styles.past_tournament_container}>
        <PastTournament tournamentList={tournamentList} />
        {tournamentList?.length > 8 && (
          <div className={styles.load_more_btn}>
            <Button
              value="Load More"
              onClick={handleLoadMore}
              disabled={loading}
            ></Button>
          </div>
        )}
      </div>
    </main>
  );
};

export default TournamentTabSwitcher;
