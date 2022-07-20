import styles from "./ImageCard.module.scss";
import { news } from "../../../jsonFiles/news";
import React from "react";
import dummy from "../../../../public/img/dummy.jpeg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const ImageCard = () => {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.cardWrapper}>
        {news.map((index: any, i: any) => {
          return (
            <div key={`index-${i}`} className={styles.cardContainer}>
              <div className={styles.imagDiv}>
                <img className={styles.imagmain} src="/img/dummy.jpeg" />
              </div>
              <div className={styles.headerDiv}>
                <div className={styles.headline}>{index.title}</div>
              </div>
              <div className={styles.read}>
                <div className={styles.innerRead}>Read More</div>
                <div className={styles.arrow}>
                  <ArrowForwardIcon className={styles.innerArrow} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};
export default ImageCard;