import SocialHandles from "../CommonComponent/SocialHandles/SocialHandles";
import JoinCommunity from "../Games/JoinCommunity/JoinCommunity";
import style from "./tournament.module.scss";
import TournamentTabSwitcher from "./TournamentTabSwitcher/TournamentTabSwitcher";

const Tournament = () => {
  return (
    <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignContent:"center"}}>
      <TournamentTabSwitcher />
      <JoinCommunity />
      <SocialHandles />
    </div>
  );
};

export default Tournament;
