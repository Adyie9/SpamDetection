import React, { useEffect, useState } from "react";
import { checkSpamAssassin } from "../services/spamAPI";

function SpamChecker({ subject }) {
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (subject.trim() !== "") {
      checkSpamAssassin(subject).then(setResult);
    } else {
      setResult(null);
    }
  }, [subject]);

  if (!result) return <p>Type a subject line to check spam score...</p>;

  return (
    <div className="spam-checker">
      <p>SpamAssassin Score: <b>{result.score}</b></p>
      <p>
        {result.score >= 5
          ? <span style={{ color: "red" }}>⚠️ High Spam Risk</span>
          : <span style={{ color: "green" }}>✅ Likely Safe</span>}
      </p>
      {result.report && (
        <details>
          <summary>Detailed Report</summary>
          <pre>{result.report}</pre>
        </details>
      )}
    </div>
  );
}

export default SpamChecker; 
