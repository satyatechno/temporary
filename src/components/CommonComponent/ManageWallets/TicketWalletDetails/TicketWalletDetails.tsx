
import styles from "./ticketwalletdetails.module.scss";
import { AiTwotoneWallet } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { useAppContext } from "@/app/Context/AuthContext";
import CopyAddress from "../../CopyAddress/CopyAddress";


// interface wallet {
//   name: string;
//   address: string;
//   balance?: boolean;
// }
// interface userData {
//   tickets: string;
//   email: string;
//   balance?: boolean;
// }

// interface ModalProps {
//   userData: userData{};
//   wallet: wallet{};
// }

const TicketWalletDetail = ({setActiveModal}:any) => {

  const {wallet,userData}:any=useAppContext();

  return (
    <div className={styles.manageWallets__containerRight}>
      <div className={styles.manageWallets__activeWalletContainer}>
        <div className={styles.manageWallets__activeWallet}>
          <p className={styles.ticket_balance_heading}>Ticket Balance</p>

          <div className={styles.manageWallets__ticket}>
            <p className={styles.balance}>Balance</p>
            <p style={{color:"white"}}>{userData?.tickets?.toFixed(4)} TICKET</p>
          </div>
          <p className={styles.ticket_balance_heading}>Active Wallet</p>

          <div className={styles.manageWallets__walletContainer}>
            <div className={styles.manageWallets__walletContainerTop}>
              <div className={styles.manageWallets__defaultWallet}>
                <AiTwotoneWallet
                  className={styles.walletIcon}
                  // fontSize="large"
                />
                <div className={styles.manageWallets__defaultWalletEmail}>
                  <h2>{`${userData?.email || " "}${
                    wallet?.name ? ` (${wallet.name})` : ""
                  }`}</h2>
                  <p>{wallet?.address}</p>
                </div>
                <div className={styles.manageWallets__defaultWalletSettings}>
                  <CopyAddress textToCopy={wallet?.address} className={styles.settingIcon}/>
                  <IoMdSettings
                    className={styles.settingIcon}
                    fontSize="small"
                    onClick={() => setActiveModal("settings")}
                  />
                  {/* {isCopied && <p style={{ color: "white" }}>Copied !</p>} */}
                </div>
              </div>
              <div className={styles.manageWallets__walletChain}>
                <div>
                  <img
                    src="https://assets.gamingarcade.io/AssetspolygonChainIcon.webp"
                    alt=""
                  />
                  <p>Polygon</p>
                </div>
              </div>
            </div>
            <hr />
            <div className={styles.manageWallets__walletContainerBottom}>
              <p>Balance</p>
              <p>{wallet?.balance} MATIC</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default TicketWalletDetail;


   {/* <CopyToClipboard text={wallet?.address}> */}
    {/* <RiFileCopyFill
      className={styles.settingIcon}
      onClick={handleCopy(wallet?.address)}
      fontSize="small"
      /> */}
    {/* </CopyToClipboard> */}