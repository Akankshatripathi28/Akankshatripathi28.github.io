import { Children } from "react";
import { classNames } from "../../../Utils";
import styles from "./Button.module.scss";
import React from "react";
export interface Iprops {
  className?: any;
  buttonName: string;
  startIcon?: React.ReactNode;
}
const InputButton = (props: Iprops) => {
  const { className, buttonName, startIcon } = props;
  return (
    <button className={classNames(styles.button, className)}>
      <div>{buttonName}</div>
      <div className={styles.icon}> {startIcon}</div>
    </button>
  );
};
export default InputButton;
