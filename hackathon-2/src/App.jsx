import { useState } from 'react'
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import EntryPage from './pages/EntryPage/EntryPage';


function App() {

  return (
    <>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage /> }/>
          <Route path="/entry/:id" element="<HomePage />" />
          <Route path="/entrypage" element={<EntryPage /> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
