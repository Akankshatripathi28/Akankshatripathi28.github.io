import styles from "./BrandingPage.module.scss";
import React from "react";
import InputButton from "../CommonComponents/Button/InputButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BrandCards from "../BrandCards/BrandCards";
import First from "../../img/First.jpg";
import Solution from "../BottomHeaderRight/Solution";
import bussiness from "../../img/bussiness.png";
const BrandingPage = () => {
  return (
    <div className={styles.mainn}>
      <div className={styles.innermain}>
        <div className={styles.headline}>
          We're a creative agency ask us about distinctive branding
        </div>
        <div className={styles.mainSubline}>
          <div className={styles.subline}>Amazing Services</div>
          <div>
            <InputButton
              className={styles.innerButton}
              buttonName="lets talk"
              startIcon={<ArrowForwardIcon />}
            />
          </div>
        </div>
      </div>
      <div>
        <BrandCards />
      </div>
      <div>
        <div className={styles.bottomMain}>
          <div className={styles.innerBottom}>
            <img src={bussiness} />
          </div>
          <div className={styles.RightBottom}>
            <Solution
              headline="Creator of quality designs and thinker of fresh ideas
"
              subline="Far far away, behing the word mountains, far from the countries Vokalia and Consonatia, there live the blinds texts. A small river named Duden flows by their place and supplies it with the necessary refelialia.
"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BrandingPage;
