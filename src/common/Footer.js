import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__dtl}>
        <span>이용약관</span>
        <span>개인정보처리방침</span>
        <span>저작권안내</span>
      </div>
      <div className={styles.footer__github}>
        <a
          href="https://github.com/dnwn-9001/BeforeWeMeet_Web.git"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="fa-3x"
            id={styles.githubMark}
          />
        </a>
      </div>
      <div className={styles.footer__rights}>
        <p>반려동물 지식공유 웹사이트</p>
        <p>Before We Meet RIGHTS RESERVED</p>
      </div>
    </div>
  );
}

export default Footer;
