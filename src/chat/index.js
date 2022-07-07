import React, { useEffect } from "react";
import io from "socket.io-client"; // 소켓 생성
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Input, Button } from "antd";

// 서버에 연결 요청
const socket = io.connect("http://localhost:8082");

//emit()으로 이벤트 내보내기
// socket.emit("hello", "안녕하세요.", (response) => {
//   console.log(response); // "got it"*
// });

function Chat(props) {
  const text = props.text;
  const close = props.closePopup;

  useEffect(() => {
    return () => {
      // 소켓 닫기
      socket.close();
    };
  }, []);
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
        <div className="popup__inner__message"></div>
        <div className="popup__inner__bottom">
          <div className="popup__inner__bottom__input">
            <Input placeholder="메세지를 작성해주세요." />
          </div>
          <div className="popup__inner__bottom__send">
            <Button type="text">보내기</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
