import React, { useState } from "react";
import "../../chat/index.css";
import { Input, Button } from "antd";

const ChatInput = ({ socket }) => {
  const [chatMessage, setChatMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("onSend", {
      msg: chatMessage,
      timeStamp: new Date().toLocaleTimeString(),
    });
    setChatMessage("");
  };

  const onChatMessageChange = (e) => {
    setChatMessage(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="popup__inner__bottom">
          <div className="popup__inner__bottom__input">
            <Input
              placeholder="메세지를 작성해주세요."
              onChange={onChatMessageChange}
              onKeyPress={(event) =>
                event.key === "Enter" ? handleSubmit() : null
              }
              value={chatMessage}
            />
            <div className="popup__inner__bottom__send">
              <Button onClick={handleSubmit}>보내기</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
