import React from 'react'
import './EntryPage.scss'
import EntryPrompt from '../../components/EntryPagePrompt/EntryPrompt';
import EntryInput from '../../components/EntryInput/EntryInput';


function EntryPage() {
  return (
    <>
        <EntryPrompt />
        <EntryInput />
    </>
  )
}

export default EntryPage