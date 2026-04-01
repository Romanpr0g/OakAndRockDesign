import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../assets/svg/logo.svg?react";
import HeaderArrow from "../../../assets/svg/headerArrow.svg?react";
import s from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false); // Для десктопа (hover)
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // Для мобильного (бургер)
  const [isMobileSubmenuOpen, setMobileSubmenuOpen] = useState(false); // Для аккордеона услуг на мобильном

  const location = useLocation();

  // Блокируем скролл фона при открытом мобильном меню
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  // Закрываем меню при переходе на другую страницу
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSubmenuOpen(false);
  };

  return (
    <header className={s.header}>
      <div className={`container ${s.inner}`}>
        <Link to="/" className={s.logo} onClick={closeMobileMenu}>
          <Logo />
        </Link>

        {/* Кнопка Бургера (видна только на мобильных) */}
        <button
          className={`${s.burgerBtn} ${isMobileMenuOpen ? s.active : ""}`}
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Навигация */}
        <nav className={`${s.nav} ${isMobileMenuOpen ? s.navMobileActive : ""}`}>
          <Link to="/catalog" onClick={closeMobileMenu}>
            Каталог
          </Link>

          {/* Блок Услуги */}
          <div
            className={`${s.dropdownWrapper} ${isMobileSubmenuOpen ? s.mobileSubmenuOpen : ""}`}
            // Логика для ДЕСКТОПА (Hover)
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
            // Логика для МОБИЛЬНОГО (Click)
            onClick={() => setMobileSubmenuOpen(!isMobileSubmenuOpen)}
          >
            <div className={s.servicesLabel}>
              <span className={s.navLink}>Услуги</span>
              <HeaderArrow className={s.arrow} />
            </div>

            {/* Выпадающее меню. 
                На десктопе управляется isMenuOpen.
                На мобильном управляется CSS классом mobileSubmenuOpen 
            */}
            {isMenuOpen && (
              <div className={`${s.dropdown} ${s.desktopDropdown}`}>
                <Link to="/services/interiors">Интерьеры под ключ</Link>
                <Link to="/services/designers">Для дизайнеров и архитекторов</Link>
              </div>
            )}

            {/* Дубликат меню специально для мобильной верстки (чтобы не ломать стили десктопа) */}
            <div className={s.mobileDropdown}>
               <Link to="/services/interiors" onClick={closeMobileMenu}>Интерьеры под ключ</Link>
               <Link to="/services/designers" onClick={closeMobileMenu}>Для дизайнеров и архитекторов</Link>
            </div>
          </div>

          <Link to="/portfolio" onClick={closeMobileMenu}>
            Портфолио
          </Link>
          <Link to="/about" onClick={closeMobileMenu}>
            О нас
          </Link>
          <Link to="/contacts" onClick={closeMobileMenu}>
            Контакты
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;