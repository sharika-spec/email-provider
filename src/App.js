import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Inbox from "./components/Inbox";
import ComposeEmail from "./components/ComposeEmail";
import inboxData from "./data.json";

function App() {
  const [isInbox, setIsInbox] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [email, setEmail] = useState({
    sendTo: "",
    subject: "",
    description: "",
  });
  const [isCheck, setIsCheck] = useState([]);
  const [data, setData] = useState(inboxData);
  return (
    <div>
      <Header
        isInbox={isInbox}
        setIsInbox={setIsInbox}
        email={email}
        setEmail={setEmail}
        isValid={isValid}
        setIsValid={setIsValid}
        data={data}
        setData={setData}
        isCheck={isCheck}
      />
      {isInbox ? (
        <Inbox data={data} isCheck={isCheck} setIsCheck={setIsCheck} />
      ) : (
        <ComposeEmail setEmail={setEmail} />
      )}
    </div>
  );
}

export default App;
