import "./index.css";
import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import Slider from "react-slick";
import { Button } from "antd";
import { Like } from "../mypage";
import Chat from "../chat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";

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
    ></div>
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
    >
      <div>
        <FontAwesomeIcon icon={faCircleChevronLeft} />
      </div>
    </div>
  );
};

class MultipleItems extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      autoplay: true,
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
              <Button onClick={this.togglePopup.bind(this)}>채팅하기</Button>
            </div>

            <div className="expert__profile__dtl">
              <img
                className="expert__profile__dtl__img"
                src="images/kim.png"
                alt="전문강사 이미지"
              />
              <h3>김명철 / 수의사, 고양이 행동 전문가</h3>
              <Button onClick={this.togglePopup.bind(this)}>채팅하기</Button>
            </div>

            <div className="expert__profile__dtl">
              <img
                className="expert__profile__dtl__img"
                src="images/jung.png"
                alt="전문강사 이미지"
              />
              <h3>김정호 / 수의사</h3>
              <Button onClick={this.togglePopup.bind(this)}>채팅하기</Button>
            </div>

            <div className="expert__profile__dtl">
              <img
                className="expert__profile__dtl__img"
                src="images/kwon.png"
                alt="전문강사 이미지"
              />
              <h3>권혁필 / 에듀펫 소장</h3>
              <Button onClick={this.togglePopup.bind(this)}>채팅하기</Button>
            </div>

            <div className="expert__profile__dtl">
              <img
                className="expert__profile__dtl__img"
                src="images/Lee.png"
                alt="전문강사 이미지"
              />
              <h3>이찬종 / 동물훈련사</h3>
              <Button onClick={this.togglePopup.bind(this)}>채팅하기</Button>
            </div>

            <div className="expert__profile__dtl">
              <img
                className="expert__profile__dtl__img"
                src="images/Jun.png"
                alt="전문강사 이미지"
              />
              <h3>이준규 / 반려견 훈련사</h3>
              <Button onClick={this.togglePopup.bind(this)}>채팅하기</Button>
            </div>
          </Slider>
        </div>

        {this.state.showPopup ? (
          <Chat text="상담하기" closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </div>
    );
  }
}

function Contents() {
  const options = [
    { value: "강아지 준비물", text: "강아지" },
    { value: "고양이 준비물", text: "고양이" },
    { value: "고슴도치 준비물", text: "고슴도치" },
    { value: "미어캣 준비물", text: "미어캣" },
    { value: "햄스터 준비물", text: "햄스터" },
    { value: "토끼 준비물", text: "토끼" },
  ];

  const [youtubeData, setYoutubeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [selected, setSelected] = useState(options[0].value);
  // const { Option } = Select;

  useEffect(() => {
    axios
      .get("http://localhost:8081/youtube", { params: { key: selected } })
      .then((result) => {
        const youtube = result.data;
        setYoutubeData(youtube);
      })
      .catch((error) => {
        console.log("요청이 실패했습니다.");
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selected]);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  if (error || !Array.isArray(youtubeData["imgList"])) {
    return <p id="error__message">There was an error loading your data!</p>;
  }

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div>
      {/* 유튜브 영역 */}
      <div className="content">
        <div className="content__title">
          <h1>YouTube</h1>
          <select
            name="content__option"
            id="content__category"
            style={{
              width: 120,
            }}
            value={selected}
            onChange={handleChange}
          >
            {options &&
              options.map((option) => {
                return (
                  <option value={option.value} key={option.value}>
                    {option.text}
                  </option>
                );
              })}
          </select>
        </div>

        <div className="content__box">
          <div className="content__box__dtl">
            <div className="content__box__dtl__div">
              {youtubeData["imgList"] &&
                youtubeData["imgList"].map((img) => {
                  const id = img.url.substring(23, 34);
                  return (
                    <a
                      href={`https://www.youtube.com/watch?v=${id}`}
                      target="_blank"
                      key={id}
                    >
                      <img
                        className="content__box__dtl__div__img"
                        src={img.url}
                        alt="썸네일"
                        key={img.url}
                      />
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// mypage의 'Like'영역에 랜더링
function LikeContents() {
  return (
    <Like title="Like">
      <div className="content">
        <div className="content__title">
          <h1>Like</h1>
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
    </Like>
  );
}
export { Contents, MultipleItems, LikeContents };
