import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import s from "./Footer.module.css";

// Импорт картинок (замените пути на свои реальные файлы)
import logo from "../../../assets/svg/logo.svg";
import instagram from "../../../assets/svg/instagram.svg"; // Или иконка инстаграма

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <footer className={`${s.footer} ${isHome ? s.footerOverlay : ""}`}>
      <div className={s.container}>
        {/* ВЕРХНЯЯ ЧАСТЬ (4 колонки) */}
        <div className={s.topRow}>
          {/* 1. Колонка: Логотип и Инстаграм */}
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
              {instagram ? <img src={instagram} alt="Inst" /> : <span>IG</span>}
            </Link>
          </div>

          {/* 2. Колонка: Меню */}
          <div className={s.col}>
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
                <Link to="mailto:info@oaknrock.com" className={s.linkUnderline}>
                  info@oaknrock.com
                </Link>
              </div>

              <p className={s.address}>г. Минск, ул. Киселёва 20</p>
            </div>
          </div>

          {/* 4. Колонка: Карта */}
          <div className={s.colMap}>
            {/* Серый блок-заглушка или iframe карты */}
            <div className={s.mapPlaceholder}></div>
          </div>
        </div>

        {/* НИЖНЯЯ ЧАСТЬ (Копирайт и Политика) */}
        <div className={s.bottomRow}>
          <p className={s.copy}>
            © 2024 Oak & Rock Design. All rights reserved.
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
