import React, { useState } from 'react';
import { AiFillCaretRight, AiFillCaretDown } from 'react-icons/ai';

export const CollapsableSection = ({ title, content, expanded = false }) => {
  const [isExpanded, setExpanded] = useState(expanded);

  return (
    <div>
      <div onClick={() => setExpanded(!isExpanded)}>
        <div className="bg-green flex justify-between text-xl text-white px-2 py-2 mt-2">
          {title}
          {isExpanded ? <AiFillCaretDown /> : <AiFillCaretRight />}
        </div>
      </div>
      {isExpanded && <div className="section-content">{content}</div>}
    </div>
  );
};
