'use client'

import Button from "@/components/CommonComponent/AnimatedButton/AnimatedButton";
import styles from "./logoutmodal.module.scss";
import config from "../../../../config";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const LogoutModal=({onClose}:any)=>{


    const router = useRouter();

    const handleLogout = async () => {
        // event.preventDefault();
        try {
            // Make API call using Axios (replace with your actual API endpoint)
            await axios.post(`${config.baseURL}user/signout`, {}, {
                headers: {
                    'Authorization': `Bearer ${Cookies.get("userToken")}`                
                }
            });
            Cookies.remove("userToken")
            // fetchUser();
            router.push("/")
            // console.log('Signup successful:', response?.data);
            // Handle success (e.g., redirect user or show a success message)
        } catch (error) {
            console.error('Error signing up:', error);
            // Cookies.remove("email");
            // Cookies.remove("user")
            Cookies.remove("userToken")
            router.push("/")
            // Handle error (show error message to user)
        }
      }
    return(
        <div className={styles.logoutModal}>
        <div className={styles.logoutModal__container}>
            <div className={styles.logoutModal__content}>
                <div className={styles.logoutModal__contentClose}>
                    <p>Sign Out</p>
                    <span onClick={onClose}>&times;</span>
                </div>
                <hr />
                <p>Are you sure you want to sign out?</p>
                <div className={styles.logoutModal__btns}>
                    <div>
                        <Button value="cancel" className={styles.logoutModal__btn} onClick={onClose} />
                    </div>
                    <div>
                        <Button value="confirm" className={styles.logoutModal__btn} onClick={handleLogout} />
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default LogoutModal;