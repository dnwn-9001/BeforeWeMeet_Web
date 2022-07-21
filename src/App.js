import "./App.css";
import "antd/dist/antd.css";
import { Logo, Mainbanner } from "./common/Logo";
import Footer from "./common/Footer";
import { Contents, MultipleItems, LikeContents, Entertain } from "./main";
import LoginPage from "./login";
import JoinPage from "./join";
import { Account, Like } from "./mypage";
import { Switch, Route } from "react-router-dom";
import "./slick.css";
import "./slick-theme.css";
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [discription, setDiscription] = useState({});
  const [topBtnOpacity, setTopBtnOpacity] = useState(0);
  const [bubbleOpacity, setBubbleOpacity] = useState("");
  const topBtn = useRef([]);
  const descriptionBubble = useRef([]);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  const onTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (scrollPosition === 0) {
      setTopBtnOpacity(0);
    } else if (scrollPosition < 250) {
      setDiscription({
        title: "반려동물 상담!",
        description: "초보 집사님 곁에 든든한 전문가! ",
      });
      setTopBtnOpacity(1);
      setBubbleOpacity("");
    } else if (scrollPosition < 700) {
      setDiscription({
        title: "유튜브 꿀팁!",
        description: "키우고싶은 동물을 선택하고 영상을 시청해보세요!",
      });
      setTopBtnOpacity(1);
      setBubbleOpacity("");
    } else if (scrollPosition < 1000) {
      setDiscription({
        title: "더위날리기!",
        description: "재밌는 테스트도하고 여행지도 알아보세요!",
      });
      setTopBtnOpacity(1);
      setBubbleOpacity("");
    } else if (scrollPosition >= 1000) {
      setDiscription({
        title: "",
        description: "",
      });
      setBubbleOpacity("none");
    }
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <div id="header">
        <Logo />
      </div>

      <div id="body">
        <Switch>
          <>
            <Route exact={true} path="/">
              <Mainbanner />
              <div className="body__contents">
                <MultipleItems />
                <Contents />
                <Entertain />
              </div>
            </Route>

            <Route exact={true} path="/login">
              <LoginPage />
            </Route>

            <Route exact={true} path="/join">
              <JoinPage />
            </Route>

            <div className="body__contents">
              <Route exact={true} path="/information">
                <Account title="My account" />
                <Like>
                  <LikeContents />
                </Like>
              </Route>
            </div>
          </>
        </Switch>
      </div>
      <div id="card" ref={descriptionBubble}>
        <div
          className="card__dtl"
          style={{
            backgroundImage: bubbleOpacity,
          }}
        >
          <p className="card__dtl__title">{discription.title}</p>
          <p className="card__dtl__discription">{discription.description}</p>
        </div>
      </div>

      <div>
        <FontAwesomeIcon
          icon={faCircleArrowUp}
          id="top_btn"
          opacity={topBtnOpacity}
          ref={topBtn}
          onClick={onTopClick}
        />
      </div>

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
