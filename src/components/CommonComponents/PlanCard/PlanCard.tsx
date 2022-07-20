import styles from "./PlanCard.module.scss";
import check from "../../../../public/img/check.png";
import close from "../../../../public/img/close.png";
import React from "react";
import { Button } from "@mui/material";

const PlanCard = (props: { data?: any }) => {
  const { data } = props;

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.header}>
          <div className={styles.headerTextArea}>
            <div className={styles.headerText}>{data.header}</div>
            <div className={styles.price}>
              <div className={styles.priceBody}>{data.price}</div>
            </div>
          </div>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.body}>
          <div className={styles.listItem}>
            {data.list.map((lists: any, index: any) => {
              return (
                <div key={`lists-${index}`} className={styles.cardContainer}>
                  <span className={styles.icon}>
                    <img
                      src={
                        lists.icon === "check"
                          ? "/img/check.png"
                          : "/img/close.png"
                      }
                    />
                  </span>
                  <span
                    className={
                      lists.icon === "check"
                        ? styles.value
                        : styles.disbaledValue
                    }
                  >
                    {lists.value}
                  </span>
                </div>
              );
            })}
          </div>
          <div className={styles.btnWrapper}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              value="Submit"
              className={styles.getStartedButton}
              disableElevation={true}
              disableFocusRipple={true}
              disableRipple={true}
              disableTouchRipple={true}
            >
              <span className={styles.buttonText}>{"close plan"}</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlanCard;
