import React, { useState } from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import FileExplorer from "../components/FileExplorer";
import "../styles/ide.css";

export default function IDE() {
  const [files, setFiles] = useState({
    "/App.js": {
      code: "export default function App(){return <h1>Hello CipherStudio</h1>}"
    },
    "/index.js": {
      code: "import App from './App'; import { createRoot } from 'react-dom/client'; createRoot(document.getElementById('root')).render(<App />);"
    },
  });

  return (
    <div className="ide-container">
      <FileExplorer files={files} setFiles={setFiles} />
      <div className="editor-preview">
        <Sandpack
          template="react"
          files={files}
          options={{
            showTabs: true,
            showLineNumbers: true,
            wrapContent: true,
          }}
        />
      </div>
    </div>
  );
}
