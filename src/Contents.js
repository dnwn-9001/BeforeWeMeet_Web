import "./Common.css";
import styles from "./Contents.module.css";

function Contents() {
  return (
    <div className={styles.content}>
      <div className={styles.content__title}>
        <h1>YouTube</h1>
        <select name="content__option" id={styles.content__category}>
          <option value="dog">강아지</option>
          <option value="cat">고양이</option>
          <option value="Hedgehog">고슴도치</option>
          <option value="meerkat">미어캣</option>
        </select>
      </div>
      <div className={styles.content__box}>
        <div className={styles.content__box__dtl}>
          <img
            className={styles.content__box__img}
            src="images/thumbnail_youtube.png"
            alt="썸네일"
          />
          <p className="content__box__title">title</p>
        </div>
        <div className={styles.content__box__dtl}>
          <img
            className={styles.content__box__img}
            src="images/thumbnail_youtube.png"
            alt="썸네일"
          />
          <p className="content__box__title">title</p>
        </div>
        <div className={styles.content__box__dtl}>
          <img
            className={styles.content__box__img}
            src="images/thumbnail_youtube.png"
            alt="썸네일"
          />
          <p className="content__box__title">title</p>
        </div>
        <div className={styles.content__box__dtl}>
          <img
            className={styles.content__box__img}
            src="images/thumbnail_youtube.png"
            alt="썸네일"
          />
          <p className="content__box__title">title</p>
        </div>
      </div>
    </div>
  );
}

export default Contents;
