import React from 'react'

function EntryInput() {
  return (
    <>
        <form className="entry">
            <input className="entry__title" id="entry-title" placeholder='Entry title'></input>
            <textarea className="entry__textarea" placeholder='Entry'></textarea>

            <button type="submit" className="entry__btn">SUBMIT</button>
        </form>
    </>
  )
}

export default EntryInput