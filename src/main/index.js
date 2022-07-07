import "../common/Common.css";
import "./index.css";
// import axios from "axios";
import React, { Component } from "react";
import Slider from "react-slick";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

// slick-slider 화살표 디자인 변경
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "#ffe082",
        border: "1px solid #ffe082",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "#ffe082",
        border: "1px solid #ffe082",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      // 전문가 타이틀
      <div className="expert">
        <div className="content__title">
          <h1>Expert Profile</h1>
        </div>
        <div className="expert__profile">
          <Slider {...settings}>
            <div className="expert__profile__dtl">
              <img
                className="expert__profile__dtl__img"
                src="images/kang.png"
                alt="전문강사 이미지"
              />
              <h3>강형욱 / 동물훈련사</h3>
              <Button>채팅하기</Button>
            </div>

            <div className="expert__profile__dtl">
              <img
                className="expert__profile__dtl__img"
                src="images/kim.png"
                alt="전문강사 이미지"
              />
              <h3>김명철 / 수의사, 고양이 행동 전문가</h3>
              <Button>채팅하기</Button>
            </div>

            <div className="expert__profile__dtl">
              <img
                className="expert__profile__dtl__img"
                src="images/jung.png"
                alt="전문강사 이미지"
              />
              <h3>김정호 / 수의사</h3>
              <Button>채팅하기</Button>
            </div>

            <div className="expert__profile__dtl">
              <img
                className="expert__profile__dtl__img"
                src="images/kwon.png"
                alt="전문강사 이미지"
              />
              <h3>권혁필 / 에듀펫 소장</h3>
              <Button>채팅하기</Button>
            </div>

            <div className="expert__profile__dtl">
              <img
                className="expert__profile__dtl__img"
                src="images/Lee.png"
                alt="전문강사 이미지"
              />
              <h3>이찬종 / 동물훈련사</h3>
              <Button>채팅하기</Button>
            </div>

            <div className="expert__profile__dtl">
              <img
                className="expert__profile__dtl__img"
                src="images/Jun.png"
                alt="전문강사 이미지"
              />
              <h3>이준규 / 반려견 훈련사</h3>
              <Button>채팅하기</Button>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

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
      {/* 유튜브 영역 */}
      <div className="content">
        <div className="content__title">
          <h1>YouTube</h1>
          <select name="content__option" id="content__category">
            <option value="dog">강아지</option>
            <option value="cat">고양이</option>
            <option value="Hedgehog">고슴도치</option>
            <option value="meerkat">미어캣</option>
          </select>
        </div>

        <div className="content__box">
          <div className="content__box__dtl">
            <img
              className="content__box__img"
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

// function Comunity() {
//   return (
//     <div className="comunity">
//       <div className={com_styles.comunity__title}>
//         <h1>Comunity</h1>
//         <button className={com_styles.comunity__more}>more</button>
//       </div>
//       <div className={com_styles.comunity__board}>
//         <div className={com_styles.comunity__board__dtl}>
//           <img
//             className="comunity__board__dtl__img"
//             src="images/thumbnail_board.png"
//             alt="게시판 썸네일"
//           />
//           <div className={com_styles.comunity__board__dtl__box}>
//             <h3>게시판 제목 입니다.</h3>
//             <p>게시판 내용 미리보기 입니다.</p>
//           </div>
//         </div>
//         <div className={com_styles.comunity__board__dtl}>
//           <img
//             className="comunity__board__dtl__img"
//             src="images/thumbnail_board.png"
//             alt="게시판 썸네일"
//           />
//           <div className={com_styles.comunity__board__dtl__box}>
//             <h3>게시판 제목 입니다.</h3>
//             <p>게시판 내용 미리보기 입니다.</p>
//           </div>
//         </div>
//         <div className={com_styles.comunity__board__dtl}>
//           <img
//             className="comunity__board__dtl__img"
//             src="images/thumbnail_board.png"
//             alt="게시판 썸네일"
//           />
//           <div className={com_styles.comunity__board__dtl__box}>
//             <h3>게시판 제목 입니다.</h3>
//             <p>게시판 내용 미리보기 입니다.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export { Contents, MultipleItems };
