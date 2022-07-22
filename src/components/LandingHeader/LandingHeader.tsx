import styles from "./LandingHeader.module.scss";
import React from "react";
import { withStyles } from "@mui/material";
import { NavBarTitle } from "../../jsonFiles/NavBarTitle";
import { OverrideMaterialStyle } from "../../styles/OverrideMaterialUi";
import SearchIcon from "@mui/icons-material/Search";
import InputButton from "../CommonComponents/Button/InputButton";
import First from "../../../public/img/First.jpg";
import Solution from "../BottomHeaderRight/Solution";
import { Link } from "react-router-dom";
const LandingHeader = () => {
  return (
    <div className={styles.main}>
      <div className={styles.innerMain}>
        <div className={styles.links}>
          <div className={styles.navLogo}>
            <div className={styles.busin}>BUSIN</div>
          </div>
          <div>
            {NavBarTitle.map((i: any, index: any) => {
              return (
                <Link
                  to={i.link}
                  key={`i-${index}`}
                  className={styles.HeaderLink}
                >
                  {i.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.innerRight}>
            <SearchIcon className={styles.icon} color="action" />
            <InputButton buttonName="Get Started" />
          </div>
        </div>
      </div>
      <div className={styles.bottomMain}>
        <div className={styles.innerBottom}>
          <img src="/img/First.jpg" />
        </div>
        <div className={styles.RightBottom}>
          <Solution
            headline="We provide the solution to grow your business
"
            subline="We help startup and digital agencues launch projects on time, with no pain"
          />
        </div>
      </div>
    </div>
  );
};
export default LandingHeader;
