import React from "react";
import Card from "../CommonComponents/Card/Card";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { CardContent } from "../../jsonFiles/CardContent";
import styles from "./BrandCard.module.scss";
const BrandCards = () => {
  return (
    <div className={styles.mainCard}>
      {CardContent.map((index: any) => {
        return (
          <div className={styles.innermainCard}>
            <Card
              logo={<ManageAccountsIcon className={styles.icon} />}
              heading={index.heading}
              content={index.content}
            />
          </div>
        );
      })}
    </div>
  );
};
export default BrandCards;
