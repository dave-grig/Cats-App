import classNames from "classnames";
import React from "react";
import { useState, useEffect } from "react";
import CategoriesItem from "./CategoriesItem";
import styles from "../../scss/Categories.module.scss";

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories, "kjkj");
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/categories")
      .then((response) => response.json())
      .then((categories) => {
          setCategories(categories);
      })
      .catch((err) => {
        alert(
          "Sorry we are unable to get Cats Data currently. Please try later"
        );
      });
  }, []);

  return (
    <ul className={classNames(styles.list)}>
      {categories.map((category) => {
        return <CategoriesItem id={category.id} title={category.name} key={category.id} />;
      })}
    </ul>
  );
};

export default CategoriesList;
