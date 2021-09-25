import React from "react";
import styles from "../scss/MainScreen.module.scss";
import CatsList from "./CatsList";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";

function MainScreen() {
  const currentCategory = useSelector((state) => state.category);

  return (
    <div className={styles.mainScreen}>
      <h2 className={styles.title}>{currentCategory.title}cats</h2>
      <Switch>
        {currentCategory.title ? (
          <Route path={`/${currentCategory.title}`}>
            <CatsList />
          </Route>
        ) : (
          <h3 className={styles.textWarning}>
            Please choose category to see content
          </h3>
        )}
      </Switch>
    </div>
  );
}

export default MainScreen;
