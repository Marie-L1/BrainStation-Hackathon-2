import PromptList from "../../components/prompts/PromptList";
import "./HomePage.scss";
import axios from "axios";

function HomePage() {
  
    const getPromptsData = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/prompts`);
          console.log(response.data)
        } catch (error) {
          console.error("Error fetching prompts", error);
        }
      };

    return (
      <div>
        <PromptList />
        
      </div>
    )
  }
  
  export default HomePage