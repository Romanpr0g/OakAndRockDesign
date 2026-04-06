import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../assets/svg/logo.svg?react";
import LogoName from "../../../assets/svg/logoName.svg?react";
import HeaderArrow from "../../../assets/svg/headerArrow.svg?react";
import s from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSubmenuOpen(false);
  };

  return (
    <header className={s.header}>
      <div className={`container ${s.inner}`}>
        {/* Логотип */}
        <Link to="/" className={s.logo} onClick={closeMobileMenu}>
          <Logo className={s.logoIcon} />
          <LogoName className={s.logoName} />
          {/* <div className={s.logoText}>
            <span className={s.logoTitle}>OAK &amp; ROCK</span>
            <span className={s.logoSub}>DESIGN</span>
          </div> */}
        </Link>

        {/* Бургер */}
        <button
          className={`${s.burgerBtn} ${isMobileMenuOpen ? s.active : ""}`}
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Меню"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Навигация */}
        <nav
          className={`${s.nav} ${isMobileMenuOpen ? s.navMobileActive : ""}`}
        >
          <Link
            to="/"
            className={`${s.navItem} ${location.pathname === "/" ? s.active : ""}`}
            onClick={closeMobileMenu}
          >
            Главная
          </Link>

          <span className={s.separator}>|</span>

          <Link
            to="/portfolio"
            className={`${s.navItem} ${location.pathname === "/portfolio" ? s.active : ""}`}
            onClick={closeMobileMenu}
          >
            Портфолио
          </Link>

          <span className={s.separator}>|</span>

          {/* Услуги */}
          <div
            className={`${s.dropdownWrapper} ${isMobileSubmenuOpen ? s.mobileSubmenuOpen : ""}`}
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
            onClick={() => setMobileSubmenuOpen(!isMobileSubmenuOpen)}
          >
            <div className={s.servicesLabel}>
              <span
                className={`${s.navItem} ${
                  location.pathname.startsWith("/services") ? s.active : ""
                }`}
              >
                Услуги
              </span>
              <HeaderArrow className={s.arrow} />
            </div>

            {/* Десктопный дропдаун */}
            {isMenuOpen && (
              <div className={s.desktopDropdown}>
                <Link to="/services/interiors" onClick={closeMobileMenu}>
                  Интерьеры под ключ
                </Link>
                <Link to="/services/designers" onClick={closeMobileMenu}>
                  Для дизайнеров и архитекторов
                </Link>
              </div>
            )}

            {/* Мобильный аккордеон */}
            <div className={s.mobileDropdown}>
              <Link to="/services/interiors" onClick={closeMobileMenu}>
                Интерьеры под ключ
              </Link>
              <Link to="/services/designers" onClick={closeMobileMenu}>
                Для дизайнеров и архитекторов
              </Link>
            </div>
          </div>

          <span className={s.separator}>|</span>

          <Link
            to="/contacts"
            className={`${s.navItem} ${location.pathname === "/contacts" ? s.active : ""}`}
            onClick={closeMobileMenu}
          >
            О нас
          </Link>

          <span className={s.separator}>|</span>

          <Link
            to="/blog"
            className={`${s.navItem} ${location.pathname === "/blog" ? s.active : ""}`}
            onClick={closeMobileMenu}
          >
            Блог
          </Link>
        </nav>

        {/* CTA кнопка */}
        <Link to="/contacts" className={s.ctaBtn} onClick={closeMobileMenu}>
          Заказать звонок
        </Link>
      </div>
    </header>
  );
};

export default Header;
