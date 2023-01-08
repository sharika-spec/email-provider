import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import ComposeEmail from "./components/ComposeEmail";

function App() {
  const [isInbox, setIsInbox] = useState(true);
  return (
    <div>
      <Header isInbox={isInbox} setIsInbox={setIsInbox} />
      {isInbox ? <Home /> : <ComposeEmail />}
    </div>
  );
}

export default App;
