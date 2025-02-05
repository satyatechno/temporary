import React, { useEffect, useState } from "react";
import styles from "./notificationcenter.module.scss";

import Head from "next/head";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  getNotifications,
  markedAsReadNotification,
} from "@/services/GameServices";
import Image from "next/image";
import Loader from "../CustomLoader/CustomLoader";
// import Modal from "@/components/AuthModal/Modal/Modal";

const Notifications = ({ onClose }: any) => {
  const [notification, setNotification] = useState([]);
  const [activeTab, setActiveTab] = useState("Important");
  const [loading, setLoading] = useState(false);
  //   const { userId } = useAuth();

  const notificationsData = async () => {
    const notificationType = activeTab === "General" ? false : true;
    setLoading(true);
    const { data } = await getNotifications(notificationType);
    console.log(data);
    setNotification(data);
    setLoading(false);
  };

  useEffect(() => {
    notificationsData();
  }, [activeTab]);

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  const handleNotificationClick = async (id: any, markAsRead: any) => {
    if (!markAsRead) {
      try {
        await markedAsReadNotification(id);
        setNotification((prev: any) =>
          prev.map((notif: any) =>
            notif.id === id ? { ...notif, isMarkedAsRead: true } : notif
          )
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Head>
        <title>
          Gaming Arcade Notifications - Stay Updated on Crypto Gaming Alerts
        </title>
        <meta
          name="title"
          content="Gaming Arcade Notifications - Stay Updated on Crypto Gaming Alerts"
        />
        <meta
          name="description"
          content="Stay informed with Gaming Arcade notifications. Get real-time updates on tournaments, game releases, and exclusive crypto gaming rewards."
        />
      </Head>

      {/* <Modal> */}
      <section className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <div className={styles.notifications}>
            <div style={{display:"flex", justifyContent:"space-between",alignContent:"center"}}>
            <div className={styles.notifications__header}>
              <IoMdNotificationsOutline
                style={{ color: "white", fontSize: "30px" }}
              />
              <p>Notifications</p>
            </div>

            <div>
              <IoCloseCircleOutline
                onClick={onClose}
                style={{ cursor: "pointer", color: "white", zIndex: "1",fontSize:"30px" }}
              />
            </div>
            </div>
           
            <div className={styles.notifications__container}>
              <div className={styles.notifications__tabs}>
                <p
                  className={`${styles.tab} ${
                    activeTab === "Important" ? styles.active : ""
                  }`}
                  onClick={() => handleTabClick("Important")}
                >
                  Important
                </p>
                <p
                  className={`${styles.tab} ${
                    activeTab === "General" ? styles.active : ""
                  }`}
                  onClick={() => handleTabClick("General")}
                >
                  General
                </p>
              </div>

              <div
                className={styles.notifications__content}
                style={{
                  overflowY: notification?.length > 4 ? "scroll" : undefined,
                }}
              >
                {loading ? (
                  <div className={styles.notifications__notFound}>
                    {/* <LuLoader
                      color="white"
                      size={50}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    /> */}
                    <Loader/>
                  </div>
                ) : notification.length > 0 ? (
                  <>
                    {notification?.map((message: any, index) => {
                      return (
                        <div
                          key={index}
                          className={`${styles.notifications__contentCard} ${
                            !message?.isMarkedAsRead
                              ? styles.unread
                              : styles.read
                          } `}
                          onClick={() =>
                            handleNotificationClick(
                              message?._id,
                              message?.isMarkedAsRead
                            )
                          }
                        >
                          <div
                            className={styles.notifications__contentCardImage}
                          >
                            {!message?.isMarkedAsRead ? (
                              <div
                                style={{
                                  width: "8px",
                                  height: "8px",
                                  backgroundColor: "#FED962",
                                  borderRadius: "50%",
                                }}
                              ></div>
                            ) : (
                              <></>
                            )}
                            <Image
                              src={message?.avatar}
                              alt="avatar"
                              width={30}
                              height={30}
                            />
                          </div>
                          <p>{message?.body?.description}</p>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <div className={styles.notifications__notFound}>
                    <p>No Notifications Found</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </Modal> */}
    </>
  );
};

export default Notifications;
