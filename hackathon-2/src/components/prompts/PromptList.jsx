import React from 'react';
import "./PromptList.scss";
import { Link } from 'react-router-dom';

function PromptList({ promptsData }) {
  return (
    <ul className="prompt-list">
      {promptsData.map((promptItem) => (
        <Link to="/entrypage"> <li key={promptItem.id} className="prompt-item">
          <h2>{promptItem.prompt}</h2>
          <img src={promptItem.image} alt={`Image of "${promptItem.prompt}"`} />
        </li></Link>
         ))}
    </ul>
  );
}

export default PromptList;
