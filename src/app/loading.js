// 'use client'
import styles from "./loading.module.scss";
import config from "../../config";
// import Lottie from "lottie-react";

// import animationData from "./../assets/ga-loader1737020398.json";

const Loading = () => {
  return (
    <div className={`${styles.buffering}`}>
      <img
        src={`${config.imageDomain}loading-images/ga-loader.gif`}
        style={{ width: "50%" }}
      /> 
      {/* <Lottie animationData={animationData} loop={true} /> */}
    </div>
  );
};

export default Loading;



