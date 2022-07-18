import styles from "./Experiments.module.scss";
import { Thoughts } from "../../jsonFiles/Thoughts";
import React from "react";
import ImageCard from "../CommonComponents/ImageCard/ImageCard";
const Experiments = () => {
  return (
    <div className={styles.cardContainer}>
      {Thoughts.map((index: any) => {
        return (
          <div>
            <div className={styles.heading}>
              <span>{index.header}</span>
            </div>
            <div className={styles.subText}>
              <span className={styles.text}>{index.subline}</span>
            </div>
            <div>
              <ImageCard />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Experiments;
