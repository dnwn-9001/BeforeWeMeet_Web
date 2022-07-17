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

function App() {
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
        <div className="card__dtl"></div>
      </div>

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
