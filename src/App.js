import "./App.css";
import "antd/dist/antd.css";
import Logo from "./common/Logo";
import Footer from "./common/Footer";
import { Contents, MultipleItems, LikeContents, Entertain } from "./main";
import LoginPage from "./login";
import JoinPage from "./join";
import { Account, Like } from "./mypage";
import { Switch, Route } from "react-router-dom";
import "./slick.css";
import "./slick-theme.css";
import { useState, useEffect } from "react";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [discription, setDiscription] = useState({});

  const handleScroll = () => {
    const position = window.scrollY;
    console.log("position:" + position);
    setScrollPosition(position);
    console.log("scrollPosition:" + scrollPosition);
  };

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
          <div className="card__dtl__expert">
            <p className="card__dtl__title">반려동물 상담!</p>
            <p className="card__dtl__discription">
              초보 집사, 이제 입양하시려는 분들 전문가에게 상담 받아보세요!
            </p>
            <p className="card__dtl__title">유튜브로 배워요!</p>
            <p className="card__dtl__discription">
              키우고싶은 동물 카테고리에 맞는 영상을 시청해보세요!
            </p>
            <p className="card__dtl__title">나에게 맞는 반려동물은?</p>
            <p className="card__dtl__discription">
              재미삼아 테스트도 해보고, 반려동물이 있다면 여행지도 알아보세요!
            </p>
          </div>
        </div>
      </div>

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
