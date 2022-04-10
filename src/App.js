import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1>IOT App</h1>
      </div>
      <div className="Content">
        {/* temp Humidity box */}
        <div className="temp-humidity">
          {/* temp box */}
          <div className="temp-container">
            <h3>{25.8} ˚C</h3>
          </div>
          {/* humidity box  */}
          <div className="Humidity-container">
            <h3>
              {39} H<sub>A</sub>
            </h3>
          </div>
        </div>

        {/* temp echart */}
        <div className="echart">
          <div className="echart-container">
            <div id="echart" className="echart-box"></div>
          </div>
        </div>
        {/* humidity echart */}
        <div className="echart">
          <div className="echart-container">
            <div id="echart2" className="echart-box"></div>
          </div>
        </div>

        {/* reload */}
        <div className="reload">
          <FontAwesomeIcon icon={faRotate} className="icon" />
        </div>
      </div>
    </div>
  );
}

export default App;
