import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ArrowBack from "../../../assets/svg/arrow.svg?react";
import s from "./Categories.module.css";

// import { getCategories } from "../../../utils/api";
import { mockCategories } from "../../../utils/mocks";
const getMockedCategories = () => Promise.resolve(mockCategories);

const Categories = () => {
  const navigate = useNavigate();
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
          <div className={s.topBar}>
            <Link to="/" className={s.backBtn}>
              <ArrowBack className={s.arrowIcon} />
            </Link>
            <span className="section-label">КАТЕГОРИИ</span>
          </div>
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
          <div className={s.topBar}>
            <Link to="/" className={s.backBtn}>
              <ArrowBack className={s.arrowIcon} />
            </Link>
            <span className={s.sectionLabel}>КАТЕГОРИИ</span>
          </div>
          <p className={s.error}>Не удалось загрузить категории: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={s.catalog}>
      <div className={s.catalogContainer}>

        {/* Стрелка назад + лейбл */}
        <div className={s.topBar}>
          <Link to="/" className={s.backBtn}>
            <ArrowBack className={s.arrowIcon} />
          </Link>
          <span className={s.sectionLabel}>КАТЕГОРИИ</span>
        </div>

        <div className={s.catalogGrid}>
          {categories.map((category) => (
            <div
              key={category.uuid}
              className={s.card}
              role="button"
              tabIndex={0}
              onClick={() => navigate(`/catalog/${category.uuid}`)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  navigate(`/catalog/${category.uuid}`);
                }
              }}
            >
              {category.main_media_url && (
                <img
                  className={s.cardImage}
                  src={category.main_media_url}
                  alt=""
                />
              )}
              <div className={s.cardOverlay} />
              <div className={s.cardFooter}>
                <h3 className={`serif ${s.cardTitle}`}>{category.title}</h3>
                <ArrowBack className={s.cardArrowIcon} aria-hidden />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Categories;