import React from 'react';
import "./PromptList.scss";

function PromptList({ promptsData }) {
  return (
    <ul className="prompt-list">
      {promptsData.map((promptItem) => (
        <li key={promptItem.id} className="prompt-item">
          <h2>{promptItem.prompt}</h2>
          <img src={promptItem.image} alt={`Image of "${promptItem.prompt}"`} />
        </li>
      ))}
    </ul>
  );
}

export default PromptList;
