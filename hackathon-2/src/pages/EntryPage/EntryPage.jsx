import React from 'react';
import './EntryPage.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import EntryPrompt from '../../components/EntryPagePrompt/EntryPrompt';
import EntryInput from '../../components/EntryInput/EntryInput';

function EntryPage() {
  const { promptId } = useParams(); // Destructure promptId from useParams
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const baseUrl = import.meta.env.VITE_API_URL;

  const fetchSelectedPrompt = async (promptId) => {
    try {
      const response = await axios.get(`http://localhost:8080/prompts/${promptId}`);
      setSelectedPrompt(response.data);
    } catch (error) {
      console.error('Error fetching the selected prompt', error);
    }
  };

  useEffect(() => {
    if (promptId) {
      fetchSelectedPrompt(promptId);
    }
  }, [promptId]);

  const handleEntrySubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`http://localhost:8080/entries`, {
        title: event.target.title.value,
        entry: event.target.entry.value,
      });
      console.log(response);
    } catch (error) {
      console.error('Error submitting entry', error);
    }
  };

  return (
    <>
      <EntryPrompt selectedPrompt={selectedPrompt} />
      <EntryInput handleEntrySubmit={handleEntrySubmit} />
    </>
  );
}

export default EntryPage;
