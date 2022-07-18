import styles from "./Footer.module.scss";
import React from "react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Icon } from "@iconify/react";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.maindiv}>
        <div className={styles.navLogo}>
          <div className={styles.busin}>BUSIN</div>
        </div>
        <div className={styles.textbox}>
          <input type="text" placeholder="your email" />
          <Icon className={styles.icon} icon="akar-icons:arrow-right" />
        </div>
        <div className={styles.contents}> get latest updates and offer</div>
        <div className={styles.contents}>weg 272 hdge iwunx djhgej diee</div>
      </div>
      <div className={styles.secondmain}>
        <div className={styles.headd}>Company</div>
        <div className={styles.contents}>exact link</div>
        <div className={styles.contents}>about us</div>
        <div className={styles.contents}>service </div>
        <div className={styles.contents}>pricing</div>
        <div className={styles.contents}>features</div>
      </div>
      <div className={styles.secondmain}>
        <div className={styles.headd}>Support</div>
        <div className={styles.contents}>How it work's</div>
        <div className={styles.contents}>FQA</div>
        <div className={styles.contents}>coming soon</div>
      </div>
      <div className={styles.secondmain}>
        <div className={styles.headd}>Recent post</div>
        <div className={styles.contents}>on the head with free internet</div>
        <div className={styles.contents}>turpisoda</div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Footer;
