import React from "react";

function InputBox({ subject, setSubject }) {
  return (
    <div className="input-box">
      <label>Enter Subject Line:</label>
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Type your subject here..."
      />
    </div>
  );
}

export default InputBox;
