import React from "react";
import styles from "./NumberCard.module.scss";
import { CardJson } from "../../../jsonFiles/cardJson";
const NumberCard = () => {
  return (
    <div className={styles.numberCardDiv}>
      {CardJson.map((index: any, i: any) => {
        return (
          <div key={`index-${i}`} className={styles.halfbg}>
            <div className={styles.innerDiv}>
              <div className={styles.imagMain} key={`index-${i}`}>
                <img className={styles.innerimagMain} src={index.firstImg} />
              </div>

              <div className={styles.title}>{index.title}</div>
              <div className={styles.content}>{index.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default NumberCard;
