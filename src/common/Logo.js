import styles from "./Logo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import React, { useRef } from "react";

function Logo() {
  return (
    <div className={styles.header__bar}>
      <Link to="/">
        <img
          src="images/logo.png"
          alt="Before We Meet"
          className={styles.header__bar__logo}
        />
      </Link>
      <ul className={styles.header__bar__nav}>
        <li>Expert Profile</li>
        <li>Youtube</li>
        <li>Entertain</li>
      </ul>
      <Link to="/login">
        <FontAwesomeIcon
          icon={faCircleUser}
          className="fa-2x"
          id={styles.header__bar__user}
        />
      </Link>
    </div>
  );
}

function Mainbanner() {
  return <div className={styles.banner}></div>;
}

export { Logo, Mainbanner };
