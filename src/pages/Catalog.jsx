import React, { useEffect, useState } from "react";
// import Arrow from "../assets/svg/arrow.svg?react";
import s from "./Catalog.module.css";
import { getCategories } from "../utils/api";

// Для мока: раскомментируй строки ниже и замени getCategories на getMockedCategories
import { mockCategories } from "../utils/mocks";
const getMockedCategories = () => Promise.resolve(mockCategories);

const Catalog = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // const data = await getCategories();
        const data = await getMockedCategories();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className={s.catalog}>
        <div className={s.catalogContainer}>
          <h2 className={`serif ${s.catalogTitle}`}>Каталог</h2>
          <div className={s.catalogGrid}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={s.skeletonCard} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={s.catalog}>
        <div className={s.catalogContainer}>
          <h2 className={`serif ${s.catalogTitle}`}>Каталог</h2>
          <p className={s.error}>Не удалось загрузить категории: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={s.catalog}>
      <div className={s.catalogContainer}>
        <h2 className={`serif ${s.catalogTitle}`}>Каталог</h2>
        <div className={s.catalogGrid}>
          {categories.map((category) => (
            <div
              key={category.uuid}
              className={s.card}
              onClick={() => onCategorySelect?.(category.uuid)}
            >
              {category.main_media_url && (
                <img
                  className={s.cardImage}
                  src={category.main_media_url}
                  alt={category.title}
                />
              )}
              <div className={s.cardOverlay} />
              <h3 className={`serif ${s.cardTitle}`}>{category.title}</h3>
              {/* <Arrow className={s.cardArrow} /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
