import { useState } from 'react';
import 'normalize.css'
import './App.scss';

import DATA from './data/data';
import Card from './Component/Card';

function App() {

  const [ isAnnual, setIsAnnual ] = useState(false);

  const HandleChangeCheckBox = () => {
    setIsAnnual(!isAnnual);
  }

  return (
    <div className="my-app">
      <img className="bg-top" src="./assets/bg-top.svg" />
      <header>
        <h1 className="title">Our Pricing</h1>
        <div className="toggle-price">
          <span className="period">Annually</span>
          
          <div className="toggle-display">
            <input type="checkbox" id="toggle" checked={isAnnual} onChange={HandleChangeCheckBox} />
            <label htmlFor="toggle"></label>
          </div>

          <span className="period">Monthly</span>
        </div>
      </header>
      <div className="cards">
        {
          DATA.map((item, key) => {
            return <Card item={item} key={key} isAnnual={isAnnual} />
          })
        }
      </div>
    </div>
  );
}

export default App;
