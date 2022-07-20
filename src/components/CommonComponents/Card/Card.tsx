import styles from "./Card.module.scss";
import React from "react";
import { classNames } from "../../../Utils";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export interface Iprops {
  className?: any;
  logo?: any;
  heading: string;
  content: string;
}
const Card = (props: Iprops) => {
  const { className, logo, heading, content } = props;
  return (
    <div className={styles.card}>
      <div className={styles.innerWrapper}>
        <div className={classNames(styles.logo, className)}>
          <img className={styles.imagelogo} src={logo} alt=""></img>
        </div>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.content}>{content}</div>
        <div className={styles.read}>
          <div className={styles.innerRead}>Read More</div>
          <div className={styles.arrow}>
            <ArrowForwardIcon className={styles.innerArrow} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
