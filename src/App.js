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
import React, { useState, useEffect } from "react";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [discription, setDiscription] = useState({});

  const handleScroll = () => {
    const position = window.scrollY;
    console.log("position:" + position);
    setScrollPosition(position);
  };

  useEffect(() => {
    if (scrollPosition < 250) {
      setDiscription({
        title: "반려동물 상담!",
        description: "초보 집사님 곁에 든든한 전문가! ",
      });
    } else if (scrollPosition < 700) {
      setDiscription({
        title: "유튜브 꿀팁!",
        description: "키우고싶은 동물을 선택하고 영상을 시청해보세요!",
      });
    } else if (scrollPosition < 1100) {
      setDiscription({
        title: "더위날리기!",
        description: "재밌는 테스트도하고 여행지도 알아보세요!",
      });
    }
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <div id="header">
        <Logo />
        <Mainbanner />
      </div>

      <div id="body">
        <Switch>
          <>
            <Route exact={true} path="/">
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
      <div id="card">
        <div className="card__dtl">
          <p className="card__dtl__title">{discription.title}</p>
          <p className="card__dtl__discription">{discription.description}</p>
        </div>
      </div>

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
