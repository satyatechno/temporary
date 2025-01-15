import DashboardGameHistory from "@/components/Dashboard/DashboardGameHistory/DashboardGameHistory";
import DashboardTournamentHistory from "@/components/Dashboard/DashboardsTournamentHistory/DashboradTournamentHistory";
import UserDetails from "@/components/Dashboard/UserDetails/UserDetails";
import UserReferDetails from "@/components/Dashboard/UserReferSystem/UserReferDetails";
import styles from "./dashboad.module.scss";
import CommunityLink from "@/components/Dashboard/Community/CommunityLink";
import { communityAboutData, CommunityData } from "@/utils/Utils";

interface DashboardProps {
  userDetails: any | null;
}

const Dashboard: React.FC<DashboardProps> = ({ userDetails }) => {
  return (
    <main className={styles.main_container}>
      <UserDetails userDetails={userDetails} />
      <UserReferDetails />
      
      <div className={styles.desktop_components}>
      <DashboardGameHistory
        games={[]}
        loadingGames={false}
        isAuthenticated={false}
      />
        <DashboardTournamentHistory />
      </div>
      <div className={styles.community_links}>
        <CommunityLink header={"Community"} socialData={CommunityData} />
        <CommunityLink header={"About"} socialData={communityAboutData} />
      </div>
    </main>
  );
};

export default Dashboard;
