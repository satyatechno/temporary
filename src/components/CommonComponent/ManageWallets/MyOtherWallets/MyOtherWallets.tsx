import { useState } from "react";
import styles from "./myotherwallets.module.scss";
import { LuLink } from "react-icons/lu";
import { AiTwotoneWallet } from "react-icons/ai";
import { MdMoreVert } from "react-icons/md";
import { MdSaveAlt } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";
import { TbLinkOff } from "react-icons/tb";
import Image from "next/image";

interface Wallet {
  name: string;
  address: string;
  balance: number;
}
const MyOtherWallets = ({ setActiveModal }: any) => {
  const [inActiveWallets] = useState<Wallet[]>([]);
  const email = "priyeshsoni";
  const [activeId] = useState(null);

  return (
    <div className={styles.manageWallets__otherWallets}>
      <div className={styles.manageWallets__otherWalletsHeading}>
        <p>My Other Wallets</p>
        <div onClick={() => setActiveModal("linkWallet")}>
          <LuLink className={styles.linkIcon} fontSize="small" />
          <p onClick={() => setActiveModal("linkWallet")}>Link a new wallet</p>
        </div>
      </div>
      <div className={styles.manageWallets__otherWalletsList}>
        <div className={styles.manageWallets__otherWalletsListContainer}>
          {inActiveWallets?.length > 0 ?
           (
            inActiveWallets?.map((data, index) => (
              <div
                className={styles.manageWallets__hasOtherWallets}
                key={index}
              >
                <div
                  className={styles.manageWallets__walletContainerTop}
                  style={{ padding: "10px 20px" }}
                >
                  <div className={styles.manageWallets__defaultWallet}>
                    <AiTwotoneWallet
                      className={styles.walletIcon}
                      fontSize="large"
                    />
                    <div className={styles.manageWallets__defaultWalletEmail}>
                      <h2>{`${email} (${data?.name})`}</h2>
                      <p>
                        {data?.address?.slice(0, 4)}...
                        {data?.address?.slice(-4)}
                      </p>
                    </div>
                  </div>
                  <div className={styles.manageWallets__hasOtherWalletsBalance}>
                    {/* <p>{data?.balance} MATIC</p> */}
                    <div style={{ position: "relative" }}>
                      {/* <MoreVertIcon fontSize="medium" onClick={ !showOptions ? handleShowOptions : handleHideOptions} style={{ color: "white", cursor: "pointer" }} /> */}
                      <MdMoreVert
                        fontSize="medium"
                        //   onClick={() => toggleDetails(data?.address)}
                        style={{ color: "white", cursor: "pointer" }}
                      />
                      {activeId === data?.address && (
                        <div className={styles.walletOptions}>
                          <div
                          //   onClick={() =>
                          //     handleDefaultWallet(data?.address)
                          //   }
                          >
                            <MdSaveAlt
                              fontSize="small"
                              style={{
                                color: "white",
                                cursor: "pointer",
                              }}
                            />
                            <p>Make as default</p>
                          </div>
                          <div>
                            {/* <CopyToClipboard text={data?.address}> */}
                            <MdContentCopy
                              fontSize="small"
                              style={{
                                color: "white",
                                cursor: "pointer",
                              }}
                            />
                            {/* </CopyToClipboard> */}
                            <p>Copy address</p>
                          </div>
                          <div
                          //   onClick={() =>
                          //     handleDeleteWallet(data?.address)
                          //   }
                          >
                            <TbLinkOff
                              fontSize="small"
                              style={{
                                color: "white",
                                cursor: "pointer",
                              }}
                            />
                            <p>Unlink from account</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.maageWallets__noOtherWallets}>
              <span className={styles.manage_wallet_image_container}>
              <Image
                src="https://assets.gamingarcade.io//loading-images/wallet2.webp"
                alt="My_Other_Wallets"
                fill
              />
              </span>
              <p>You don’t have any other wallet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOtherWallets;
