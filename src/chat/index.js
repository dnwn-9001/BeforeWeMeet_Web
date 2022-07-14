import { useEffect, useState } from "react";
import io from "socket.io-client"; // 소켓 생성
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Input, Button } from "antd";
import { SOCKET_URL } from "../config/constants";

// 서버에 연결 요청
const socket = io.connect();

socket.io.on("error", (error) => {
  console.log("error:" + error);
});

socket.io.on("reconnect_error", (error) => {
  console.log("reconnect_error :" + error);
});

function Chat(props) {
  const text = props.text;
  const close = props.closePopup;

  let [chatArr, setChatArr] = useState([]);
  let [chat, setChat] = useState("");
  let cnt = 0;

  // useEffect(() => {
  //   return () => {
  //     // 소켓 닫기
  //     socket.close();
  //   };
  // }, []);

  //receive message 이벤트에 대한 콜백을 등록해줌
  useEffect(() => {
    socket.on("receive message", (message) => {
      const engine = socket.io.engine;
      console.log("engine.transport.name: " + engine.transport.name);
      console.log("message : " + message);
      cnt++;
      setChatArr((chatArr) => chatArr.concat(message));
    });
  }, []);

  //버튼을 클릭시 send message이벤트 발생 -> 서버측에서 socket.on으로 받음.
  // const buttonHandler = useCallback(() => {
  //   socket.emit("send message", chat);
  //   setChat("");
  // }, [chat]);

  const buttonHandler = () => {
    socket.emit("send message", chat);
    setChat("");
  };

  // useCallback(함수, 배열): 첫번째 인자로 넘어온 함수를, 두번째 인자로 넘어온 배열 내의 값이 변경될 때까지 저장해놓고 재사용할 수 있게 해줌.
  // const changeMessage = useCallback(
  //   (e) => {
  //     setChat(e.target.value);
  //   },
  //   [chat]
  // );

  const changeMessage = (e) => {
    setChat(e.target.value);
  };

  return (
    <div className="popup">
      <div className="popup__inner">
        <div className="popup__inner__title">
          <p>{text}</p>
          <FontAwesomeIcon
            className="popup__inner__title__close fa-2x"
            icon={faXmark}
            onClick={close}
          />
        </div>
        <div className="popup__inner__message">
          <div className="popup__inner__message__box">
            {/* cnt를 1씩 증가시켜서 같은 메세지 내용이어도 key값을 고유하게 해줌. */}
            {chatArr &&
              chatArr.map((ele, cnt) => (
                <div
                  key={ele.concat(cnt)}
                  className="popup__inner__message__box__log"
                >
                  <p>{ele}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="popup__inner__bottom">
          <div className="popup__inner__bottom__input">
            <Input
              placeholder="메세지를 작성해주세요."
              onChange={changeMessage}
              onKeyPress={(event) =>
                event.key === "Enter" ? buttonHandler() : null
              }
              value={chat}
            />
          </div>
          <div className="popup__inner__bottom__send">
            <Button type="text" onClick={buttonHandler}>
              보내기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
