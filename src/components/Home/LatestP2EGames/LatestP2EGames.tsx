'use client'

import { fetchGames } from "@/services/GameServices";
import { useEffect, useState } from "react"
import styles from "./lastestP2eGames.module.scss";


const LatestP2EGames=()=>{
  const [gameData, setGameData] = useState();

    const getGameData = async () => {
        const data: any = await fetchGames();
        setGameData(data?.data);
      };
    
      useEffect(() => {
        getGameData();
    
        return () => {};
      }, []);
    
    return (
        <div className={styles.main_container}>
             <h3 className={styles.heading}>Latest P2E Games</h3>
             
        </div>
    )
}

export default LatestP2EGames;