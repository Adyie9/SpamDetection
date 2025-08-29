// src/App.jsx
import React, { useState } from "react";
import "./styles.css";
import InputBox from "./components/InputBox";
import LengthChecker from "./components/LengthChecker";
import SpamChecker from "./components/SpamChecker";
import Preview from "./components/Preview";
import { checkSpamAssassin } from "./services/spamAPI";

function App() {
  const [subject, setSubject] = useState("");
  const [spamResult, setSpamResult] = useState(null);

  const handleCheck = async () => {
    const result = await checkSpamAssassin(subject);
    setSpamResult(result);
  };

  const handleReload = () => {
    setSubject("");
    setSpamResult(null);
  };

  return (
    <div className="app">
      <h1>Subject and foam line tester</h1>

      <InputBox subject={subject} setSubject={setSubject} />
      <LengthChecker subject={subject} />

      <div style={{ marginTop: "10px" }}>
        <button onClick={handleCheck}>Check Spam</button>
        <button onClick={handleReload} style={{ marginLeft: "10px" }}>
          Reload
        </button>
      </div>

      {spamResult && (
        <div>
          <SpamChecker subject={subject} result={spamResult} />
        </div>
      )}

      <Preview subject={subject} />
    </div>
  );
}

export default App;
