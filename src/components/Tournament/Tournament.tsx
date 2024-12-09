import SocialHandles from "../CommonComponent/SocialHandles/SocialHandles";
import JoinCommunity from "../Games/JoinCommunity/JoinCommunity";
import style from "./tournament.module.scss";
import TournamentTabSwitcher from "./TournamentTabSwitcher/TournamentTabSwitcher";

const Tournament = () => {
  return (
    <div>
      <TournamentTabSwitcher />
      <JoinCommunity />
      <SocialHandles />
    </div>
  );
};

export default Tournament;
