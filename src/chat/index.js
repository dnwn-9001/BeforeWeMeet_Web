import React, { useEffect, useState, useCallback } from "react";
import io from "socket.io-client"; // 소켓 생성
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Input, Button } from "antd";

// 서버에 연결 요청
const socket = io.connect("http://localhost:8082");

//emit()으로 이벤트 내보내기
// socket.emit("hello", "안녕하세요.", (response) => {
//   console.log(response);
// });

// socket.emit("send message", "궁금한게 있습니다.", (response) => {
//   console.log(response);
// });

function Chat(props) {
  const text = props.text;
  const close = props.closePopup;

  const [chatArr, setChatArr] = useState([]);
  const [chat, setChat] = useState("");

  useEffect(() => {
    return () => {
      // 소켓 닫기
      socket.close();
    };
  }, []);

  // 서버측에서 발생한 receive message 이벤트를 처리한다. (message를 받아 chatArr에 넣는다.)
  useEffect(() => {
    socket.on("receive message", (message) => {
      console.log("receive : " + message);
      setChatArr((message) => {
        chatArr.concat(message);
        console.log("chatArr : " + chatArr);
      });
    });
  });

  //버튼을 클릭시 send message이벤트 발생 -> 서버측에서 socket.on으로 받음.
  const buttonHandler = useCallback(() => {
    console.log("클릭");
    console.log(chat);
    socket.emit("send message", chat);
  }, [chat]);

  // useCallback(함수, 배열): 첫번째 인자로 넘어온 함수를, 두번째 인자로 넘어온 배열 내의 값이 변경될 때까지 저장해놓고 재사용할 수 있게 해줌.
  //
  const changeMessage = useCallback(
    (e) => {
      setChat(e.target.value);
    },
    [chat]
  );

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
            {chatArr.map((ele) => (
              <div className="popup__inner__message__box__log">
                {ele.message}
              </div>
            ))}
          </div>
        </div>
        <div className="popup__inner__bottom">
          <div className="popup__inner__bottom__input">
            <Input
              placeholder="메세지를 작성해주세요."
              onChange={changeMessage}
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
