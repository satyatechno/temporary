
import styles from "./lastestP2eGames.module.scss";
import SwiperCarousel from "../SwiperCarousel/SwiperCarousel";


const LatestP2EGames=({games}:any)=>{

    
    return (
        <div className={styles.main_container}>
             <h3 className={styles.heading}>Latest P2E Games</h3>
             <div>
                <SwiperCarousel data={games}/>
             </div>

        </div>
    )
}

export default LatestP2EGames;