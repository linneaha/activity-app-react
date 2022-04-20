import { useState } from "react";
import { Activity } from "./components/Activity.jsx";
import "./App.css";

function App() {
  const [activity, setActivity] = useState([]);

  const generateActivity = () => {
    fetch("http://www.boredapi.com/api/activity/")
      .then((response) => response.json())
      .then((json) => setActivity(json));
  };

  const participantsActivity = () => {
    let value = document.querySelector("#participants").value;
    fetch(`http://www.boredapi.com/api/activity?participants=${value}`)
      .then((response) => response.json())
      .then((json) => setActivity(json));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <span>Activity application</span>
        </h1>
      </header>
      <main>
        <div id="button-1">
          <button onClick={generateActivity}>New activity</button>
        </div>
        <div>
          <label htmlFor="participants">
            Choose activity based on number of participants:
          </label>
          <select id="participants">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="4">4</option>
          </select>
          <div>
            <button onClick={participantsActivity}>Get activity</button>
          </div>
        </div>
        <div id="content">
          <Activity activities={activity} />
        </div>
      </main>
      <footer>
        <small>Inlämningsuppgift 2 - Linnea Hensfelt Andersson</small>
      </footer>
    </div>
  );
}

export default App;
