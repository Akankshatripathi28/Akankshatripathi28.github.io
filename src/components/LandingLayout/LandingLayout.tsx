import React from "react";
import BrandingPage from "../BrandingPage/BrandingPage";
import BudgetPage from "../BudgetPage/BudgetPage";
import Experiments from "../Experiments/Experiments";
import Footer from "../Footer/Footer";
import LandingHeader from "../LandingHeader/LandingHeader";
import Performancee from "../Performance/Performancee";

const LandingLayout = () => {
  return (
    <>
      <LandingHeader />
      <BrandingPage />
      <Performancee />
      <BudgetPage />
      <Experiments />
      <Footer />
    </>
  );
};
export default LandingLayout;
