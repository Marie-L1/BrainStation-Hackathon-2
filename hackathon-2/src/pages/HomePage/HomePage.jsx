import React, { useState, useEffect } from "react";
import PromptList from "../../components/prompts/PromptList";
import "./HomePage.scss";
import axios from "axios";

function HomePage() {
  const [promptsData, setPromptsData] = useState([]);

  const getPromptsData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/prompts`);
      const promptsData = response.data;
      setPromptsData(promptsData);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching prompts", error);
    }
  };

  useEffect(() => {
    getPromptsData();
  }, []);

  return (
    <div>
      <PromptList promptsData={promptsData} />
    </div>
  );
}

export default HomePage;
