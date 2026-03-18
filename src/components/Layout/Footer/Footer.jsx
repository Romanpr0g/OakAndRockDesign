import React, { useRef, useState, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import s from "./Footer.module.css";

// Импорт картинок (замените пути на свои реальные файлы)
import logo from "../../../assets/svg/logo.svg";
import instagram from "../../../assets/svg/instagram.svg"; // Или иконка инстаграма

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const footerRef = useRef(null);

  const [dynamicMargin, setDynamicMargin] = useState(0);

  useLayoutEffect(() => {
    if (!isHome) {
      setDynamicMargin(0);
      return;
    }

    const updateHeight = () => {
      if (footerRef.current) {
        const height = footerRef.current.offsetHeight;
        setDynamicMargin(-height);
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, [isHome]);

  return (
    <footer
      ref={footerRef}
      className={`${s.footer} ${isHome ? s.footerOverlay : ""}`}
      style={{
        marginTop: isHome ? `${dynamicMargin}px` : undefined,
      }}
    >
      <div className={s.container}>
        {/* ВЕРХНЯЯ ЧАСТЬ (4 колонки) */}
        <div className={s.topRow}>
          {/* 1. Колонка: Логотип и Инстаграм */}
          <div className={s.leftCol}>
            {" "}
            <div className={s.colLogo}>
              <img src={logo} alt="Oak & Rock" className={s.logoImage} />

              {/* Ссылка на инстаграм */}
              <Link
                to="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className={s.socialLink}
              >
                {/* Если нет SVG, можно пока поставить текст или иконку */}
                {instagram ? (
                  <img src={instagram} alt="Inst" />
                ) : (
                  <span>IG</span>
                )}
              </Link>
            </div>
            <div className={s.centerCol}>
              {/* 2. Колонка: Меню */}
              <div className={s.colMenu}>
                <h4 className={s.heading}>МЕНЮ</h4>
                <ul className={s.list}>
                  <li>
                    <Link to="/">Главная</Link>
                  </li>
                  <li>
                    <Link to="/catalog">Каталог</Link>
                  </li>
                  <li>
                    <Link to="/services">Услуги</Link>
                  </li>
                  <li>
                    <Link to="/portfolio">Портфолио</Link>
                  </li>
                  <li>
                    <Link to="/about">О нас</Link>
                  </li>
                  <li>
                    <Link to="/contacts">Контакты</Link>
                  </li>
                </ul>
              </div>
              {/* 3. Колонка: Контакты */}
              <div className={s.col}>
                <h4 className={s.heading}>КОНТАКТЫ</h4>
                <div className={s.contactsBlock}>
                  <p className={s.phone}>+375 29 633 36 33</p>

                  <div className={s.emails}>
                    <span>Почта: </span>
                    <Link
                      to="mailto:info-oaknrock@yandex.by"
                      className={s.linkUnderline}
                    >
                      info-oaknrock@yandex.by
                    </Link>
                    <Link
                      to="mailto:info@oaknrock.com"
                      className={s.linkUnderline}
                    >
                      info@oaknrock.com
                    </Link>
                  </div>

                  <p className={s.address}>г. Минск, ул. Киселёва 20</p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Колонка: Карта */}
          <div className={s.colMap}>
            <iframe
              title="Карта: г. Минск, ул. Киселёва 20"
              // ll - центрирует карту по координатам (долгота, широта)
              // z=17 - масштаб (приближение)
              // pt - ставит красную метку (pm2rdm) точно на здание
              src="https://yandex.ru/map-widget/v1/?ll=27.565963,53.914080&z=17&pt=27.565963,53.914080,pm2rdm"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen={true}
              className={s.mapPlaceholder}
            ></iframe>
          </div>
        </div>

        {/* НИЖНЯЯ ЧАСТЬ (Копирайт и Политика) */}
        <div className={s.bottomRow}>
          <p className={s.copy}>
            © 2026 Oak & Rock Design. All rights reserved.
          </p>
          <Link to="/privacy" className={s.privacy}>
            Privacy Policy Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
