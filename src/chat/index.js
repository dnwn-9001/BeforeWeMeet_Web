import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import ChatInput from "../components/chatInput/ChatInput";
import ChatLog from "../components/chatLog/ChatLog";
import Loading from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Chat = (props) => {
  const text = props.text;
  const close = props.closePopup;

  // 소켓 연결하기
  const socket = io({
    withCredentials: true,
    extraHeaders: {
      "my-custom-header": "chat client",
    },
  });

  if (socket) {
    socket.on("connect", () => {
      socket.emit("join");
    });
  }

  return (
    <div>
      {socket ? (
        <>
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
                  <ChatLog socket={socket}></ChatLog>
                </div>
              </div>

              <ChatInput socket={socket}></ChatInput>
            </div>
          </div>
        </>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};

export default Chat;
