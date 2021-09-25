import classNames from "classnames";
import React from "react";
import styles from "../scss/Sidebar.module.scss";
import CategoriesList from "./Categories/CategoriesList";

const Sidebar = () => {
  return (
    <div className={classNames(styles.sidebar)}>
      <h3 className={styles.title}>Choose Categories</h3>
      <CategoriesList />
    </div>
  );
};

export default Sidebar;
