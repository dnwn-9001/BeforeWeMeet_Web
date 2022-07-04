import "./Common.css";
import styles from "./Logo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

function Logo() {
  return (
    <div className={styles.header__bar}>
      <img
        src="images/logo.png"
        alt="Before We Meet"
        className={styles.header__bar__logo}
      />
      <FontAwesomeIcon
        icon={faCircleUser}
        className="fa-2x"
        id={styles.header__bar__user}
      />
    </div>
  );
}

export default Logo;
