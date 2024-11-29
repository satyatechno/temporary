"use client";

import DynamicModal from "@/components/CommonComponent/DynamicModal/DynamicModal";
import styles from "./editusername.module.scss";
import { useState } from "react";

import { MdModeEdit } from "react-icons/md";
import config from "../../../../config";

interface DashboardProps {
  userDetails: any | null;
}

const EditUserName:React.FC<DashboardProps>  = ({userDetails}) => {
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [userName,setUserName]=useState(userDetails?.userName)
  const closeModal = () => setIsPopupOpen(false);

  const handleSubmit = async (data: Record<string, any>) => {
    try {
      const response = await fetch(`${config.baseURL}user/update/usernames`, {
        method: "PUT",
        headers: { "Content-Type": "application/json",Authorization: `Bearer ('')}` },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log("Success:", result);
      // setUserName(result?.name)
    } catch (error) {
      console.error("Error submitting form data:", error);
    } finally {
      closeModal();
    }
  };


  const fields = [
    { name: userDetails?.userName, label: "Username", type: "text", required: true },
    // { name: "email", label: "Email Address", type: "email", required: true },
    // { name: "age", label: "Age", type: "number", placeholder: "Optional" },
  ];

  return (
    <>
      <div
        className={`${styles.sunWrap} ${styles.wallet}`}
        style={{ marginBottom: "35px" }}
      >
        <span className={styles.sunChild}>
          <span>{userName}</span>
          <MdModeEdit
            onClick={() => setIsPopupOpen(!isPopupOpen)}
            style={{ cursor: "pointer", color: "#fbc400" }}
          />
        </span>
      </div>
      {isPopupOpen && (
        <DynamicModal
          title="User Name"
          fields={fields}
          onClose={closeModal}
          onSubmit={handleSubmit}
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
