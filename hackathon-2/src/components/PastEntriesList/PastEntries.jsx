import "./PastEntries.scss";

function PastEntries({ promptsData }) {

  return (
    <div>
    <h1> PAST ENTRIES</h1>
    <ul className="Prompts">
      {promptsData?.map((promptItem) => (
        <li key={promptItem.id} className="Prompts-section">
          <div className="Prompts-section__circle">
            <div className="Prompts-section__circle-color"></div>
          </div>
          <div className="Prompts-section-info">
            <div className="Prompts-section__info-tags">
              
            </div>
            <div>
            <h1>{promptItem.entry}</h1>
            <h2>{promptItem.prompt}</h2>
            <img src={promptItem.image} alt={`Image of "${promptItem.prompt}"`} />
            </div>
          </div>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default PastEntries;
