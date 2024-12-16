import React from 'react';
import './animatedButton.module.scss';
import styles from './animatedButton.module.scss';

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

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <a
      className={`${styles.hz_linear_button} ${props?.className} ${
        props.disabled ? 'disabled' : ''
      } `}
      onClick={props.disabled ? undefined : props.onClick}
    >
      {props.icon && (
        <img src={props.icon} alt="Icon" className={props.imageClass} />
      )}
      <span className={props?.textClass}>{props.value}</span>
      {props.iconNew && (
        <img src={props.iconNew} alt="Icon" className="new-icon" />
      )}
    </a>
  );
};

export default Button;
