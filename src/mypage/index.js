import "./index.css";

function Account(props) {
  const accountTitle = props.title;
  return (
    <div className="content">
      <div className="content__title">
        <h1>{accountTitle}</h1>
      </div>

      <div className="account">
        <h2>Nickname : Joan</h2>
        <h2>E-mail : jjj@nate.com</h2>
        <h2>H.P : 010-1111-2222</h2>
      </div>
    </div>
  );
}

function Like({ children }) {
  return <div>{children}</div>;
}

export { Account, Like };
