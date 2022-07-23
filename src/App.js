import './App.css';
import { useState } from 'react';
import rawPlanetData from './data/csvjson.json'
import _ from "lodash";
import { wardenFilters } from './helpers/infoOrganizer';
import { wardenHeadings, playerHeadings } from './data/headingLists';

function App() {
  const [planetData, setPlanetData] = useState(rawPlanetData)

  const wardenInfo = wardenHeadings.map(heading => {
    return (
      <div
        key={heading}
      >
        <h3>{heading}</h3>
        <p>{planetData[0][heading]}</p>
      </div>
    )
  })

    const playerInfo = playerHeadings.map(heading => {
    return (
      <div
        key={heading}
      >
        <h3>{heading}</h3>
        <p>{planetData[0][heading]}</p>
      </div>
    )
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Planet Generator</h1>
        <div>
          <h2>Details</h2>
        </div>
        <div>
          <h2>Warden Info</h2>
            {wardenInfo}
        </div>
        <div>
          <h2>Player Info</h2>
          {playerInfo}

        </div>

      </header>
    </div>
  );
}

export default App;
