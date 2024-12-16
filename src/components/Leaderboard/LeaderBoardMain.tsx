"use client";
import styles from "./leaderboard.module.scss";
import GameTraits from "@/components/Leaderboard/GameTraits/GameTraits";
import TopRankers from "@/components/Leaderboard/TopRankers/TopRankers";
import LeaderBoardTable from "@/components/Leaderboard/LeaderBoardTable/LeaderBoardTable";
import { useEffect, useState } from "react";
import { TournamentData } from "@/services/GameServices";
import { useSearchParams } from "next/navigation";

const LeaderBoardMain = () => {
  const [topPlayerRating, setTopPlayerRating] = useState();
  const [tournamentData, setTournamentData] = useState();
  const [freeEntry,setFreeEntry]=useState();
  const [timeLeft,setTimeleft]=useState();
  const [participates,setParticipates]=useState();
  const [topThreeParticipants,setTopThreeParticipants]=useState();

  const searchParams=useSearchParams();
  const tournament_id=searchParams.get('tournament')
  console.log("tournament_id",tournament_id)

  const getTournamentData = async () => {
    const {data} = await TournamentData(tournament_id);
    setParticipates(data?.participates);
    setTopThreeParticipants(data?.topThreeParticipants);
    setTournamentData(data?.tournament);
    setTimeleft(data?.tournament?.endAt);
    setFreeEntry(data?.freeEntry)
  };

  useEffect(() => {
    getTournamentData();
  }, []);

  return (
    <div className={styles.leaderboard_container}>
      <div className={styles.user_leaderboard}>
        <div className={styles.user_ranking_box}>
          <GameTraits tournamentData={tournamentData} timeLeft={timeLeft} participates={participates}/>
          <TopRankers topRankersData={topThreeParticipants}/>
        </div>
        <LeaderBoardTable participates={participates}/>
      </div>
    </div>
  );
};

export default LeaderBoardMain;


