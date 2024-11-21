import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import { header_element } from "@/utils/Utils";

const Header = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.image_container}>
        <Link href="/home">
          <Image
            alt="gaming-arcde"
            src="https://assets.gamingarcade.io//Assets/logo.webp"
            fill
          />
        </Link>
      </div>
      <div className={styles.toggler_page_header}>
        {header_element?.map((value) => (
          <Link href={value?.link} key={value?.title}>
            <p key={value?.title}>{value?.title}</p>
          </Link>
        ))}
      </div>
      <div className={styles.wallet_headers}>
        <p>50.00</p>
        <p>notification</p>
        <p>wallet</p>
      </div>
    </div>
  );
};

export default Header;
{
  /* <p>Explore Games</p>
        <p>Tournament</p>
        <p>Dashboard</p> */
}
