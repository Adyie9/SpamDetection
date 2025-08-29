import React from "react";

function LengthChecker({ subject }) {
  const charCount = subject.length;
  const wordCount = subject.trim() === "" ? 0 : subject.trim().split(/\s+/).length;


  return (
    <div className="length-checker">
      <p>Characters: {charCount}</p>
      <p>Words: {wordCount}</p>
      {charCount > 60 ? (
        <p style={{ color: "red" }}>⚠️ Too long! Keep under 60 chars.</p>
      ) : (
        <p style={{ color: "green" }}>✅ Length looks good.</p>
      )}
    </div>
  );
}

export default LengthChecker;
