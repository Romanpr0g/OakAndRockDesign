import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import s from "./ProductDetails.module.css";
import placeholderImage from "../../../assets/home.jpg";

// import { getItemDetail } from "../../../utils/api";
import { mockItemDetails } from "../../../utils/mocks";

const getMockedItemDetail = (uuid) =>
  Promise.resolve(mockItemDetails[uuid] ?? null);

const ProductDetails = () => {
  const { categoryId, itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const fetchItem = async () => {
      setLoading(true);
      setError(null);
      try {
        // const data = await getItemDetail(itemId);
        const data = await getMockedItemDetail(itemId);
        if (!data) throw new Error("Товар не найден");
        setItem(data);
        setActiveSlide(0);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, [itemId]);

  if (loading) {
    return (
      <div className={s.pageWrapper}>
        <div className="container">
          <div className={s.skeletonShowcase} />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={s.pageWrapper}>
        <div className="container">
          <p className={s.error}>{error}</p>
        </div>
      </div>
    );
  }

  const hasMultipleImages = item.media_urls.length > 1;
  const currentImage = item.media_urls[activeSlide] || placeholderImage;

  return (
    <div className={s.pageWrapper}>
      <div className="container">

        {/* Навигация */}
        <div className={s.topBar}>
          <Link to={`/catalog/${categoryId}`} className={s.backBtn}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={s.arrowIcon}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5M5 12L12 19M5 12L12 5" />
            </svg>
          </Link>
          <span className={s.sectionLabel}>{item.paragraph}</span>
        </div>

        {/* Основной блок */}
        <div className={s.productShowcase}>

          {/* Левая колонка — изображение / слайдер */}
          <div className={s.imageCol}>
            <img
              src={currentImage}
              alt={item.title}
              className={s.productImage}
            />

            {hasMultipleImages && (
              <>
                <button
                  className={`${s.sliderArrow} ${s.sliderArrowLeft}`}
                  onClick={() =>
                    setActiveSlide((prev) =>
                      prev === 0 ? item.media_urls.length - 1 : prev - 1
                    )
                  }
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  className={`${s.sliderArrow} ${s.sliderArrowRight}`}
                  onClick={() =>
                    setActiveSlide((prev) =>
                      prev === item.media_urls.length - 1 ? 0 : prev + 1
                    )
                  }
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <div className={s.sliderDots}>
                  {item.media_urls.map((_, i) => (
                    <button
                      key={i}
                      className={`${s.dot} ${i === activeSlide ? s.dotActive : ""}`}
                      onClick={() => setActiveSlide(i)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Правая колонка — информация */}
          <div className={s.infoCol}>
            <h1 className={s.title}>{item.title}</h1>

            <p className={s.description}>{item.description}</p>

            <div className={s.priceRow}>
              <span className={s.currency}>BYN</span>
              <span className={s.price}>{item.price}</span>
            </div>

            {/* description_marks — характеристики */}
            {item.description_marks.length > 0 && (
              <div className={s.specsGrid}>
                {item.description_marks.map((mark, i) => (
                  <div key={i} className={s.specItem}>
                    <span className={s.specTitle}>{mark.title}</span>
                    <span className={s.specValue}>{mark.subtitle}</span>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

        {/* marks — карточки преимуществ внизу */}
        {item.marks.length > 0 && (
          <div className={s.featuresRow}>
            {item.marks.map((mark, i) => (
              <div key={i} className={s.featureCard}>
                <div
                  className={s.featureIconWrapper}
                  dangerouslySetInnerHTML={{ __html: mark.image }}
                />
                <h4 className={s.featureTitle}>{mark.title}</h4>
                <p className={s.featureDesc}>{mark.subtitle}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductDetails;