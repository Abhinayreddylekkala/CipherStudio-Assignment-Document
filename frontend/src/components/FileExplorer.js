import React from "react";

export default function FileExplorer({ files }) {
  return (
    <div className="file-explorer">
      <h3>Files</h3>
      <ul>
        {Object.keys(files).map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  );
}
