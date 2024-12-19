
import React from "react";
import "./animatedButton.module.scss";
import styles from "./animatedButton.module.scss";

interface ButtonProps {
  value: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  icon?: string;
  imageClass?: string;
  iconNew?: string;
  textClass?: string;
}

const Button: React.FC<ButtonProps> = ({className = "", disabled = false, onClick, value, icon, imageClass = "", iconNew}) => {

  return (
    <button
      className={`${styles.hz_linear_button} ${className}  ${
        disabled ? styles.disabled : ""
      }`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled} 
      value={value}
    >
      {icon && <img src={icon} alt="Icon" className={imageClass} />}
      <span>{value}</span>
      {iconNew && <img src={iconNew} alt="Icon New" className="new-icon" />}
    </button>
  );
};

export default Button;

