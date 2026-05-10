import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import s from "./CategoryPage.module.css";
import ArrowIcon from "../../../assets/svg/arrow.svg?react";

// import { getCategoryDetail } from "../../../utils/api";
import { mockCategoryDetails } from "../../../utils/mocks";
import ProductCard from "../ProductCard/ProductCard";

const getMockedCategoryDetail = (uuid) =>
  Promise.resolve(mockCategoryDetails[uuid] ?? null);

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const closeImageModal = () => {
    setSelectedImage(null);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  useEffect(() => {
    const fetchCategory = async () => {
      setLoading(true);
      setError(null);
      try {
        // const data = await getCategoryDetail(categoryId);
        const data = await getMockedCategoryDetail(categoryId);
        if (!data) throw new Error("Категория не найдена");
        setCategory(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCategory();
  }, [categoryId]);

  useEffect(() => {
    if (!selectedImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeImageModal();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  if (loading) {
    return (
      <div className={s.pageWrapper}>
        <div className={s.pageContainer}>
          <div className={s.skeleton} />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={s.pageWrapper}>
        <div className={s.pageContainer}>
          <p className={s.error}>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={s.pageWrapper}>
      <div className={s.pageContainer}>
        <div className={s.topBar}>
          <Link to="/catalog" className={s.backBtn}>
            <ArrowIcon className={s.arrowIcon} />
          </Link>
          <span className="section-label">{category.paragraph}</span>
        </div>

        <section className={s.heroSection}>
          <div className={s.heroLeft}>
            <h1 className={s.heroTitle}>{category.title}</h1>
            <p className={s.heroDesc}>{category.description}</p>
            {category.marks.length > 0 && (
              <div className={s.featuresGrid}>
                {category.marks.map((mark, i) => (
                  <div key={i} className={s.featureItem}>
                    {mark.image && (
                      <img src={mark.image} alt={mark.title} className={s.featureIcon} />
                    )}
                    <div>
                      <h4>{mark.title}</h4>
                      <p>{mark.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={s.heroRight}>
            {category.first_media_url && (
              <button
                type="button"
                className={s.imageButton}
                onClick={() => setSelectedImage(category.first_media_url)}
                aria-label={`Открыть фото категории ${category.title}`}
              >
                <img src={category.first_media_url} alt={category.title} className={s.heroImg1} />
              </button>
            )}
            {category.second_media_url && (
              <button
                type="button"
                className={s.imageButton}
                onClick={() => setSelectedImage(category.second_media_url)}
                aria-label={`Открыть фото категории ${category.title}`}
              >
                <img src={category.second_media_url} alt={category.title} className={s.heroImg2} />
              </button>
            )}
          </div>
        </section>

        {category.items.length > 0 && (
          <section className={s.catalogSection}>
            <span className={`${s.sectionLabel} section-label`}>КАТАЛОГ</span>
            <div className={s.catalogGrid}>
              {category.items.map((item) => (
                <ProductCard
                  key={item.uuid}
                  uuid={item.uuid}
                  categoryId={categoryId}
                  title={item.title}
                  material={item.subtitle}
                  price={item.price}
                  image={item.main_media_url}
                />
              ))}
            </div>
          </section>
        )}
      </div>

      {selectedImage && (
        <div
          className={s.imageModalOverlay}
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр изображения"
          onClick={closeImageModal}
        >
          <button
            type="button"
            className={s.imageModalClose}
            onClick={closeImageModal}
            aria-label="Закрыть изображение"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt={category.title}
            className={s.imageModalContent}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default CategoryPage;