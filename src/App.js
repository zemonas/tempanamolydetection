import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import Temp from "./Components/Temp/Temp";
import { useState, useEffect } from "react";
import Humidity from "./Components/Humidity/Humidity";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(
      "https://sheet.best/api/sheets/5b593795-c7a5-415b-89f7-c77f9915b119"
    );
    const data = await response.json();
    setData(data);
    console.log(data);
  };
  const handleUpdate = () => {
    fetchData();
  };
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
          <Temp data={data} />
        </div>
        {/* humidity echart */}
        <div className="echart">
          <Humidity data={data} />
        </div>

        {/* reload */}
        <div
          className="reload"
          onClick={() => {
            handleUpdate();
          }}
        >
          <FontAwesomeIcon icon={faRotate} className="icon" />
        </div>
      </div>
    </div>
  );
}

export default App;
