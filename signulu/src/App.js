import "./App.css";
import NavBar from "./components/navbar";
import Greet from "./components/greet";
import Proposal from "./components/proposal";
import Insights from "./components/insights";

function App() {
  return (
    <div>
      <NavBar />
      <Greet />
      <Proposal />
      <Insights />
    </div>
  );
}

export default App;
