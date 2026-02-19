import React from "react";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.row}`}>
        <div className={s.col}>
          <div className={s.logo}>LOGO</div>
          <p className={s.copy}>
            © 2024 Oak & Rock Design.
            <br />
            All rights reserved.
          </p>
        </div>
        <div className={s.col}>
          <h4>МЕНЮ</h4>
          <ul>
            <li>Главная</li>
            <li>Каталог</li>
            <li>Услуги</li>
            <li>Портфолио</li>
          </ul>
        </div>
        <div className={s.col}>
          <h4>КОНТАКТЫ</h4>
          <p>+375 29 633 36 33</p>
          <p>info@oaknrock.com</p>
          <p>г. Минск, ул. Киселёва 20</p>
        </div>
        <div className={s.col}>
          <div className={s.map}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
