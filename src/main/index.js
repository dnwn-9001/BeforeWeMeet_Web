import "../common/Common.css";
import con_styles from "./Contents.module.css";
import com_styles from "./Comunity.module.css";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function Contents() {
  // 유튜브 정보 요청
  // const [data, setData] = React.useState([]);
  // React.useEffect(() => {
  //   axios
  //     .get("http://localhost:8081/youtube")
  //     .then((result) => {
  //       const data = result.data;
  //       // let titles = data["titleList"];
  //       // let urls = data["urlList"];
  //       // let imgs = data["imgList"];
  //       console.log(data);
  //       // data["titleList"].forEach((list) => {
  //       //   console.log("list : " + list);
  //       // });
  //       setData(data);
  //     })
  //     .catch((error) => {
  //       console.log("요청이 실패했습니다.");
  //     });
  // }, []);

  return (
    <div>
      {/* 전문가 프로필 영역 */}
      <div className={con_styles.expert}>
        <div className={con_styles.content__title}>
          <h1>Expert Profile</h1>
        </div>
        <div className={con_styles.expert__profile}>
          <button>
            <h1>버튼</h1>
          </button>
          <div className={con_styles.expert__profile__dtl}>
            <img
              className={con_styles.expert__profile__dtl__img}
              src=""
              alt="전문강사 이미지"
            />
            <span>강사명 : 강형욱 / 강아지 행동훈련사</span>
          </div>
          <button>
            <h1>버튼</h1>
          </button>
        </div>
      </div>
      {/* 유튜브 영역 */}
      <div className={con_styles.content}>
        <div className={con_styles.content__title}>
          <h1>YouTube</h1>
          <select name="content__option" id={con_styles.content__category}>
            <option value="dog">강아지</option>
            <option value="cat">고양이</option>
            <option value="Hedgehog">고슴도치</option>
            <option value="meerkat">미어캣</option>
          </select>
        </div>

        <div className={con_styles.content__box}>
          <div className={con_styles.content__box__dtl}>
            <img
              className={con_styles.content__box__img}
              src="images/thumbnail_youtube.png"
              alt="썸네일"
            />
            <p className="content__box__title">title</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Comunity() {
  return (
    <div className="comunity">
      <div className={com_styles.comunity__title}>
        <h1>Comunity</h1>
        <button className={com_styles.comunity__more}>more</button>
      </div>
      <div className={com_styles.comunity__board}>
        <div className={com_styles.comunity__board__dtl}>
          <img
            className="comunity__board__dtl__img"
            src="images/thumbnail_board.png"
            alt="게시판 썸네일"
          />
          <div className={com_styles.comunity__board__dtl__box}>
            <h3>게시판 제목 입니다.</h3>
            <p>게시판 내용 미리보기 입니다.</p>
          </div>
        </div>
        <div className={com_styles.comunity__board__dtl}>
          <img
            className="comunity__board__dtl__img"
            src="images/thumbnail_board.png"
            alt="게시판 썸네일"
          />
          <div className={com_styles.comunity__board__dtl__box}>
            <h3>게시판 제목 입니다.</h3>
            <p>게시판 내용 미리보기 입니다.</p>
          </div>
        </div>
        <div className={com_styles.comunity__board__dtl}>
          <img
            className="comunity__board__dtl__img"
            src="images/thumbnail_board.png"
            alt="게시판 썸네일"
          />
          <div className={com_styles.comunity__board__dtl__box}>
            <h3>게시판 제목 입니다.</h3>
            <p>게시판 내용 미리보기 입니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Contents, Comunity };
