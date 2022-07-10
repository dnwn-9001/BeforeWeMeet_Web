import "./index.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Account(props) {
  const [account, setAccount] = useState([]);
  const [error, setError] = useState();
  const accountTitle = props.title;

  useEffect(() => {
    axios
      .get("http://localhost:8081/account")
      .then((result) => {
        const myAccount = result.data;
        console.log(myAccount[0].PHONE);
        setAccount(myAccount);
      })
      .catch((error) => {
        console.log("요청이 실패했습니다.");
        setError(error);
      });
  }, []);

  if (error || !Array.isArray(account)) {
    return <p id="error__message">There was an error loading your data!</p>;
  }

  return (
    <div className="content">
      <div className="content__title">
        <h1>{accountTitle}</h1>
      </div>

      {account &&
        account.map((acc) => {
          return (
            <div className="account">
              <h2 key={acc.MEMBER_EMAIL}>ID : {acc.MEMBER_EMAIL}</h2>
              <h2 key={acc.NICKNAME}>Nickname : {acc.NICKNAME}</h2>
              <h2 key={acc.PHONE}>H.P : {acc.PHONE}</h2>
            </div>
          );
        })}
    </div>
  );
}

function Like({ children }) {
  return <div>{children}</div>;
}

export { Account, Like };
