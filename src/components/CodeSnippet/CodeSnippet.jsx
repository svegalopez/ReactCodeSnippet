import React, { useEffect, useState } from "react";
import hljs from "highlight.js";
import { Clipboard, CheckCircle } from "react-feather";

import "highlight.js/styles/a11y-light.css";
import "./codesnippet.css";

export default function CodeSnippet({ language, children }) {
  const [showCopied, setShowCopied] = useState(false);

  const ref = React.createRef();

  async function copyText() {
    try {
      await navigator.clipboard.writeText(children);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }

  function handleClick() {
    setShowCopied(true);

    copyText();

    setTimeout(() => {
      setShowCopied(false);
    }, 3000);
  }

  useEffect(() => {
    hljs.highlightElement(ref.current, {
      language: language,
    });
  }, [children]);

  return (
    <div className="rcs-outer">
      <pre>
        <code ref={ref}>{children}</code>
      </pre>
      <Clipboard
        onClick={handleClick}
        className={`rcs-copy-icon ${showCopied ? "hidden" : ""}`}
      />
      <CheckCircle className={`rcs-copy-icon ${showCopied ? "" : "hidden"}`} />
    </div>
  );
}
