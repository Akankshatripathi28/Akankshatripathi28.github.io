import styles from "./Solution.module.scss";
import React from "react";
import InputButton from "../CommonComponents/Button/InputButton";
import { classNames } from "../../Utils";
export interface Iprops {
  headline: string;
  subline: string;
  className?: any;
}
const Solution = (props: Iprops) => {
  const { headline, subline, className } = props;
  return (
    <div className={styles.contentRight}>
      <div className={classNames(styles.headline, className)}>{headline}</div>
      <div className={classNames(styles.subline, className)}>{subline}</div>
      <div className={styles.button}>
        <InputButton buttonName="Read more" />
      </div>
    </div>
  );
};
export default Solution;
