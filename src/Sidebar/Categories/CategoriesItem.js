import React from "react";
import styles from "../../scss/Categories.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  IoIosArrowForward,
  IoIosArrowDown,
  GoDiffAdded,
} from "react-icons/all";
import Dropdown from "../Dropdown";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentCategory,
  updateCurrentCats,
  resetImagesCountPerPage,
} from "../../redux/actions";

const CategoriesItem = ({ id, title }) => {
  const dispatch = useDispatch();
  const [openDropdown, setOpenDropdown] = useState(false);
  const imagesCountPerPage = useSelector(
    (state) => state.cats.imagesCountPerPage
  );

  const handleCategoryClick = () => {
    dispatch(setCurrentCategory({ id: id, title: title }));
    dispatch(resetImagesCountPerPage());
  };

  const handleOpenDropdown = (e) => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <li className={classNames(styles.item)}>
      <div className={styles.linkWrapper}>
        <Link
          to={`/${title.toLowerCase()}`}
          className={styles.link}
          onClick={handleCategoryClick}
        >
          {title}
        </Link>
        <button className={styles.iconButton} onClick={handleOpenDropdown}>
          {openDropdown ? (
            <>
              <IoIosArrowDown className={styles.icon} />
            </>
          ) : (
            <IoIosArrowForward className={styles.icon} />
          )}
        </button>
      </div>
      {openDropdown ? <Dropdown /> : null}
    </li>
  );
};

export default CategoriesItem;
