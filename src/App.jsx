import "./index.css";
import Graph from "./components/Graph";
import Location from "./components/Location";
function App() {
  return (
    <div className="container">
      <div className="left-container">
        <Graph />
      </div>
      <div className="right-container">
        <Location />
      </div>
    </div>
  );
}

export default App;
