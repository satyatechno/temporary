import DashboardGameHistory from "@/components/Dashboard/DashboardGameHistory/DashboardGameHistory";
import DashboardTournamentHistory from "@/components/Dashboard/DashboardsTournamentHistory/DashboradTournamentHistory";
import UserDetails from "@/components/Dashboard/UserDetails/UserDetails";
import UserReferDetails from "@/components/Dashboard/UserReferSystem/UserReferDetails";
import styles from "./dashboad.module.scss";

interface DashboardProps {
  userDetails: any | null;
}

const Dashboard: React.FC<DashboardProps> = ({ userDetails }) => {
  return (
    <main className={styles.main_container}>
      <UserDetails userDetails={userDetails} />
      <UserReferDetails />
      <DashboardGameHistory
        games={[]}
        user={{
          uuid: "",
        }}
        loadingGames={false}
        isAuthenticated={false}
      />
       <DashboardTournamentHistory />
    </main>
  );
};

export default Dashboard;


 // openModal={function (): void {
        //   throw new Error("Function not implemented.");
        // }}