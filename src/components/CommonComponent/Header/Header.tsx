"use client";

import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import { header_element } from "@/utils/Utils";
import { useState } from "react";
import Register from "@/components/AuthModal/Register/Register";
import Login from "@/components/AuthModal/Login/Login";

const Header = () => {
  const isSignedIn = true;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);

  // const openRegisterModal = () => setCurrentModal("register");
  // const closeModal = () => setCurrentModal(null);

  console.log("isModalOpen", isModalOpen);
  return (
    <div className={styles.main_container}>
      <div className={styles.image_container}>
        <Link href="/">
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
            <p className={styles.header_title} key={value?.title}>
              {value?.title}
            </p>
          </Link>
        ))}
      </div>
      <div className={styles.wallet_headers}>
        {!isSignedIn && <p>50.00</p>}
        <p>notification</p>
        {!isSignedIn ? (
          <p>wallet</p>
        ) : (
          <p
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            Sign In
          </p>
        )}
      </div>
      {isModalOpen && (
        <Register setIsModalOpen={setIsModalOpen}/>
      )}
    </div>
  );
};

export default Header;

 // <Login setIsModalOpen={setIsModalOpen} />
