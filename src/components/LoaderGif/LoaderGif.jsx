'use client'

import Lottie from "lottie-react";
import animationData from "../../assets/ga-loader1737020398.json";

const LoaderGif = () => {
  return <Lottie animationData={animationData} loop={true} />;
};

export default LoaderGif;

