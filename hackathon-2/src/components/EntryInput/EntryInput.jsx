import React from 'react'

function EntryInput({handleEntrySubmit}) {
  return (
    <>
        <form className="entry" onSubmit={handleEntrySubmit}>
            <input className="entry__title" id="entry-title" placeholder='Entry title'></input>
            <textarea className="entry__textarea" placeholder='Entry'></textarea>

            <button className="entry__btn">SUBMIT</button>
        </form>
    </>
  )
}

export default EntryInput