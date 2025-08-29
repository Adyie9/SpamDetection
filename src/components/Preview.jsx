import React from "react";

function Preview({ subject }) {
  return (
    <div className="preview">
      <h3>Inbox Preview</h3>
      <p>
        <b>{subject || "(No subject)"}</b> – This is a sample email body
        preview...
      </p>
    </div>
  );
}

export default Preview;
