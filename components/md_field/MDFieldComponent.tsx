import React, {useState} from 'react';
import styles from "../../styles/Note.module.scss";
import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";

const MDFieldComponent = () => {
  const [input, setInput] = useState('')

  return (
    <div className={styles.wrapper}>
      <textarea autoFocus className={styles.textarea} value={input} onChange={e => setInput(e.target.value)}/>
      <ReactMarkdown
        children={input}
        className={styles.markdown}
        components={{
          code({ inline, className, children}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code className={className}>
                {children}
              </code>
            )
          }
        }}
      />
    </div>
  );
};

export default MDFieldComponent;