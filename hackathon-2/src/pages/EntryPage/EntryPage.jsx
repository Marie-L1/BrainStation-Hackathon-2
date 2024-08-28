import React from 'react'
import './EntryPage.scss'
import axios from 'axios';
import EntryPrompt from '../../components/EntryPagePrompt/EntryPrompt';
import EntryInput from '../../components/EntryInput/EntryInput';


function EntryPage() {
  const baseUrl = import.meta.env.VITE_API_URL;

  const handleEntrySubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post(`${baseUrl}/entries`, {
      title: event.target.title.value,
      entry: event.target.entry.value
    });
    console.log(response)
  }

  return (
    <>
        <EntryPrompt />
        <EntryInput handleEntrySubmit={handleEntrySubmit}/>
    </>
  )
}

export default EntryPage