import React from "react";
import styles from "./Performance.module.scss";
import { PerformanceeJson } from "../../jsonFiles/Performancee";
import NumberCard from "../CommonComponents/NumberCard/NumberCard";
const Performancee = () => {
  return (
    <div className={styles.main}>
      <div className={styles.innermain}>
        <div className={styles.headline}>{PerformanceeJson.heading}</div>
        <div className={styles.mainSubline}>
          <div className={styles.subline}>{PerformanceeJson.subHeading}</div>
        </div>
        <div>
          <NumberCard />
        </div>
      </div>
    </div>
  );
};
export default Performancee;
