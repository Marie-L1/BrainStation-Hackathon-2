import React from 'react'

function EntryPage() {
  return (
    <>
      <section className="prompt-entry">
                <img className="prompt-entry__img" 
                src={}
                alt={} />
            <h2 className="prompt-entry__title">{}</h2>
        </section>
        <form className="entry">
            <input className="entry__title" id="entry-title" placeholder='Entry title'></input>
            <textarea className="entry__textarea" placeholder='Entry'></textarea>
        </form>
    </>
  )
}

export default EntryPage