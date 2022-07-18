import React from "react";
import { PlanJson } from "../../../jsonFiles/Plan";
import { plans } from "../../../jsonFiles/PlanCardValues";
import PlanCard from "../PlanCard/PlanCard";
import styles from "./Plan.module.scss";

const Plan = () => {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.heading}>
          <span>{PlanJson.header}</span>
        </div>
        <div className={styles.subText}>
          <span className={styles.text}>{PlanJson.subText}</span>
        </div>

        <div className={styles.cardWrapper}>
          {plans.map((plan, index) => {
            return (
              <div key={`cards-${index}`} className={styles.cardContainer}>
                <PlanCard data={plan} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Plan;
