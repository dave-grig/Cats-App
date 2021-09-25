import React from "react";
import styles from "../scss/Categories.module.scss";
import { GoDiffAdded } from "react-icons/all";
import { useDispatch } from "react-redux";
import { updateCurrentCats } from "../redux/actions";

const Dropdown = () => {
  const dispatch = useDispatch();

  const handleAddMoreImages = (e) => {
    dispatch(updateCurrentCats(10));
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.button} onClick={handleAddMoreImages}>
        Add More
      </button>
    </div>
  );
};

export default Dropdown;
