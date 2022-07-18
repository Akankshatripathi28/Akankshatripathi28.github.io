import styles from "./BudgetPage.module.scss";
import React from "react";
import Plan from "../CommonComponents/Plan/Plan";
const BudgetPage = () => {
  return (
    <div className={styles.budgetmain}>
      <Plan />
    </div>
  );
};
export default BudgetPage;
