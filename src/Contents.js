import "./Common.css";
import styles from "./Contents.module.css";
import axios from "axios";
import React from "react";

function Contents() {
  // 유튜브 정보 요청
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:8081/youtube")
      .then((result) => {
        const data = result.data;
        // let titles = data["titleList"];
        // let urls = data["urlList"];
        // let imgs = data["imgList"];
        console.log(data);
        // data["titleList"].forEach((list) => {
        //   console.log("list : " + list);
        // });
        setData(data);
      })
      .catch((error) => {
        console.log("요청이 실패했습니다.");
      });
  }, []);

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
      </div>
    </div>
  );
}

export default Contents;
