import Image from "next/image";
import styles from "./walletsidebar.module.scss";
import { sideBarData } from "@/utils/Utils";
import config from "../../../../../config";
import { MdLogout } from "react-icons/md";

const WalletSidebar = ({setActiveModal}:any) => {
  return (
    <div className={styles.manageWallets__containerLeft}>
      <div className={styles.manageWallets__sidebar}>
        <Image
          src={`${config.imageDomain}Assets/logo.webp`}
          alt="logo"
          height={60}
          width={80}
          //   onClick={() => navigate.push("/")}
        />
        <div className={styles.manageWallets__sidebarOptions}>
          {sideBarData?.map((value) => (
            <div
              key={value?.title}
              onClick={() => setActiveModal(value?.modalType)}
            >
              <Image
                src={`${config.imageDomain}/${value?.src}`}
                alt="logo"
                height={30}
                width={30}
              />
              <p>{value.title}</p>
            </div>
          ))}
        </div>
        <div className={styles.manageWallets__sidebarLogout}>
          <div
            onClick={() => setActiveModal("logout")}
          >
            <MdLogout style={{ color: "white" }} />
            <p>Logout</p>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default WalletSidebar;
