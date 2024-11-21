import HomeCarousel from "@/components/Home/HomeCarousel/HomeCarousel"
import LatestP2EGames from "@/components/Home/LatestP2EGames/LatestP2EGames";
import OpenChallenges from "@/components/Home/OpenChallenges/OpenChallenges";

const HomePage=()=>{
    return(
        <main>
            {/* <h1>This is Home</h1> */}
            <HomeCarousel/>
            <OpenChallenges/>
            <LatestP2EGames/>
        </main>
    )
}

export default HomePage;