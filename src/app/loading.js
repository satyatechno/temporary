import styles from "./loading.module.scss";
import config from "../../config";

const Loading = () => {
  return (
    <div
      className={`${styles.buffering}`}
    >
      <img
        src={`${config.imageDomain}loading-images/ga-loader.gif`}
        style={{ width: "50%" }}
      />
    </div>
  );
};

export default Loading;

