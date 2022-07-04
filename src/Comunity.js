import "./Common.css";
import styles from "./Comunity.module.css";

function Comunity() {
  return (
    <div className="comunity">
      <div className={styles.comunity__title}>
        <h1>Comunity</h1>
        <button className={styles.comunity__more}>more</button>
      </div>
      <div className={styles.comunity__board}>
        <div className={styles.comunity__board__dtl}>
          <img
            className="comunity__board__dtl__img"
            src="images/thumbnail_board.png"
            alt="게시판 썸네일"
          />
          <div className={styles.comunity__board__dtl__box}>
            <h3>게시판 제목 입니다.</h3>
            <p>게시판 내용 미리보기 입니다.</p>
          </div>
        </div>
        <div className={styles.comunity__board__dtl}>
          <img
            className="comunity__board__dtl__img"
            src="images/thumbnail_board.png"
            alt="게시판 썸네일"
          />
          <div className={styles.comunity__board__dtl__box}>
            <h3>게시판 제목 입니다.</h3>
            <p>게시판 내용 미리보기 입니다.</p>
          </div>
        </div>
        <div className={styles.comunity__board__dtl}>
          <img
            className="comunity__board__dtl__img"
            src="images/thumbnail_board.png"
            alt="게시판 썸네일"
          />
          <div className={styles.comunity__board__dtl__box}>
            <h3>게시판 제목 입니다.</h3>
            <p>게시판 내용 미리보기 입니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comunity;
