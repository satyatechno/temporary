"use client";

import DynamicModal from "@/components/CommonComponent/DynamicModal/DynamicModal";
import styles from "./editusername.module.scss";
import { useState } from "react";

import { MdModeEdit } from "react-icons/md";
import config from "../../../../config";
import { useAppContext } from "@/app/Context/AuthContext";
import Cookies from "js-cookie";

interface DashboardProps {
  userDetails: any | null;
}

const EditUserName: React.FC<DashboardProps> = ({ userDetails }: any) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const closeModal = () => setIsPopupOpen(false);
  const { userData, setUserData } = useAppContext();
  const [userName, setUserName] = useState(userData?.userName);

  const token = Cookies.get("userToken");

  const handleSubmit = async (data: Record<string, any>) => {
    const newUpdatedUserName = {
      userName: data,
    };
    try {
      const response = await fetch(`${config.baseURL}user/update/usernames`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newUpdatedUserName),
      });
      const result = await response.json();
      setUserData(result?.data);
    } catch (error) {
      console.error("Error submitting form data:", error);
    } finally {
      closeModal();
    }
  };
  return (
    <>
      <div
        className={`${styles.sunWrap} ${styles.wallet}`}
        style={{ marginBottom: "35px" }}
      >
        <span className={styles.sunChild}>
          <span>{userData?.userName}</span>
          <MdModeEdit
            onClick={() => setIsPopupOpen(!isPopupOpen)}
            style={{ cursor: "pointer", color: "#fbc400" }}
          />
        </span>
      </div>
      {isPopupOpen && (
        <DynamicModal
          title="User Name"
          onClose={closeModal}
          onSubmit={handleSubmit}
          userName={userData?.userName}
          setUserData={setUserData}
          setUserName={setUserName}
          newUserName={userName}
        />
      )}
    </>
  );
};

export default EditUserName;

{
  // setIsLoading(true);
  // try {
  //   const response = await axios.put(
  //     `${config.apiURL}user/update/usernames`,
  //     {
  //       userName: updateUserName,
  //     },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("userToken")}`,
  //       },
  //     }
  //   );
  //   if (response.status === 200) {
  //     setUserName(updateUserName);
  //     setIsPopupOpen(false);
  //   }
  // } catch (error) {
  //   console.log(error);
  // } finally {
  //   setIsLoading(false);
}
