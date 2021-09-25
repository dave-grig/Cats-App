import React from "react";
import styles from "../scss/MainScreen.module.scss";

const CatsImage = ({ url }) => {
  return (
    <div className={styles.imageWrapper}>
      <img className={styles.image} src={url} />
    </div>
  );
};

export default CatsImage;
