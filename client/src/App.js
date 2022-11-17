import './App.css';
import CardSlot from './CardSlot';
import React, {useEffect, useState} from 'react'

function App() {

  const randomCard = "http://localhost:3000/api/v1/spreads/random_card";
  const [singleCard, setSingleCard] = useState(null);

  function handleClick() {
    fetch(randomCard).then((r) => {
        if (r.ok) {
          r.json().then((card) => {
            console.log(card[0])
            setSingleCard(card[0])
          });
        }
        else {
          throw new Error("haha nope")
        }
      })
    }
  

  return (
   <div>
    <h1 className="header">Tarot Reading~</h1>
    <div className="buttonDiv">
    <button className='cardButton' onClick={handleClick}>Single Card</button>
    </div>
    </div>
  );
}

export default App;
