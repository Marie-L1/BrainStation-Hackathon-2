import React from 'react';
import "./EntryPrompt.scss";

function PromptEntry({ selectedPrompt }) {
  return (
      <section className="prompt-entry">
        <div className="prompt-entry__wrapper">
          {/* <img
            className="prompt-entry__img"
            src={selectedPrompt.image}
            alt={`Image of "${selectedPrompt.prompt}"`}
          /> */}
          {/* <h2 className="prompt-entry__title">{selectedPrompt.prompt}</h2> */}
        </div>
      </section>
    );
  }

export default PromptEntry