import "./Common.css";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__dtl}>
        <span>이용약관</span>
        <span>개인정보처리방침</span>
        <span>저작권안내</span>
      </div>
      <div className={styles.footer__rights}>
        <p>Before We Meet RIGHTS RESERVED.</p>
      </div>
    </div>
  );
}

export default Footer;
