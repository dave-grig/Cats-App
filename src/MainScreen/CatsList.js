import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CatsImage from "./CatsImage";
import styles from "../scss/MainScreen.module.scss";
import { setCurrentCats, updateCurrentCats, resetImagesCountPerPage } from "../redux/actions";

const CatsList = () => {
  const currentCategory = useSelector((state) => state.category);
  const currentCats = useSelector((state) => state.cats.images);
  const imagesCountPerPage = useSelector(
    (state) => state.cats.imagesCountPerPage
  );

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=${imagesCountPerPage}&page=1&category_ids=${currentCategory.id}`
    )
      .then((response) => response.json())
      .then((cats) => {
        dispatch(setCurrentCats(cats));
      })
      .catch((err) => {
        alert(
          "Sorry we are unable to get Cats Data currently. Please try later"
        );
      });
  }, [currentCategory.id, imagesCountPerPage]);

  return (
    <ul className={styles.imagesList}>
      {currentCats.map((cat) => {
        return <CatsImage url={cat.url} key={cat.id} />;
      })}
    </ul>
  );
};

export default CatsList;
