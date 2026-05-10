import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import s from "./ProductDetails.module.css";
import placeholderImage from "../../../assets/home.jpg";
import ArrowIcon from "../../../assets/svg/arrow.svg?react";

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
  const [selectedImage, setSelectedImage] = useState(null);

  const closeImageModal = () => {
    setSelectedImage(null);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

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
        <div className={s.pageInner}>
          <div className={s.skeletonShowcase} />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={s.pageWrapper}>
        <div className={s.pageInner}>
          <p className={s.error}>{error}</p>
        </div>
      </div>
    );
  }

  const mediaUrls = item.media_urls?.length ? item.media_urls : [placeholderImage];
  const hasMultipleImages = mediaUrls.length > 1;
  const currentImage = mediaUrls[activeSlide] || placeholderImage;
  const descriptionMarks = item.description_marks ?? [];
  const featureMarks = item.marks ?? [];

  return (
    <div className={s.pageWrapper}>
      <div className={s.pageInner}>

        {/* Навигация */}
        <div className={s.topBar}>
          <Link to={`/catalog/${categoryId}`} className={s.backBtn}>
            <ArrowIcon className={s.arrowIcon} />
          </Link>
          <span className={s.sectionLabel}>{item.paragraph}</span>
        </div>

        {/* Основной блок */}
        <div className={s.productShowcase}>

          {/* Левая колонка — изображение / слайдер */}
          <div className={s.imageCol}>
            <button
              type="button"
              className={s.imageZoomTrigger}
              onClick={() => setSelectedImage(currentImage)}
              aria-label={`Открыть фото: ${item.title}`}
            >
              <img
                src={currentImage}
                alt={item.title}
                className={s.productImage}
              />
            </button>

            {hasMultipleImages && (
              <>
                <button
                  type="button"
                  className={`${s.sliderArrow} ${s.sliderArrowLeft}`}
                  onClick={() =>
                    setActiveSlide((prev) =>
                      prev === 0 ? mediaUrls.length - 1 : prev - 1
                    )
                  }
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  className={`${s.sliderArrow} ${s.sliderArrowRight}`}
                  onClick={() =>
                    setActiveSlide((prev) =>
                      prev === mediaUrls.length - 1 ? 0 : prev + 1
                    )
                  }
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <div className={s.sliderDots}>
                  {mediaUrls.map((_, i) => (
                    <button
                      type="button"
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

            {item.description ? (
              <p className={s.description}>{item.description}</p>
            ) : null}

            <div className={s.priceRow}>
              <span className={s.currency}>BYN</span>
              <span className={s.price}>{item.price}</span>
            </div>

            {descriptionMarks.length > 0 && (
              <div className={s.specsRow}>
                {descriptionMarks.map((mark, i) => (
                  <div key={i} className={s.specItem}>
                    <span className={s.specTitle}>{mark.title}</span>
                    <span className={s.specValue}>{mark.subtitle}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {featureMarks.length > 0 && (
          <div className={s.featuresRow}>
            {featureMarks.map((mark, i) => (
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
            alt={item.title}
            className={s.imageModalContent}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;