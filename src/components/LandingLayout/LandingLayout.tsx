import React from "react";
import BrandingPage from "../BrandingPage/BrandingPage";
import BudgetPage from "../BudgetPage/BudgetPage";
import Experiments from "../Experiments/Experiments";
import Footer from "../Footer/Footer";
import LandingHeader from "../LandingHeader/LandingHeader";
import Performancee from "../Performance/Performancee";
import styles from "./LandingLayout.module.scss";
const LandingLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <LandingHeader />
      <BrandingPage />
      <Performancee />
      <BudgetPage />
      <Experiments />
      <Footer />
    </div>
  );
};
export default LandingLayout;
