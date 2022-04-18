import { useState } from 'react';

import ReactMarkdown from 'react-markdown';

const Markdown = () => {
  
  const [markDown, setMarkDown] = useState();

  return (
    <>
      <div className="container">
        <textarea
          value={markDown}
          onChange={(e) => setMarkDown(e.target.value)}
          className="textarea"
        ></textarea>

        <div className="output">
          <ReactMarkdown>{markDown}</ReactMarkdown>
        </div>

      </div>
    </>
  );
};

export default Markdown
