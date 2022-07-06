import "antd/dist/antd.css";
import "./common/Common.css";
import Logo from "./common/Logo";
import Footer from "./common/Footer";
import { Contents } from "./main";
import LoginPage from "./login";
import JoinPage from "./join";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div id="header">
        <Logo />
      </div>

      <div id="body">
        <Switch>
          <Route exact={true} path="/">
            <div className="body__contents">
              <Contents />
              {/* <Comunity /> */}
            </div>
          </Route>

          <Route exact={true} path="/login" component={LoginPage}>
            <LoginPage />
          </Route>

          <Route exact={true} path="/join" component={JoinPage}>
            <JoinPage />
          </Route>
        </Switch>
      </div>

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
