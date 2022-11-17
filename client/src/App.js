import './App.css';
import CardSlot from './CardSlot';
import React, {useEffect, useState} from 'react'

function App() {

  const randomCard = "http://localhost:3000/api/v1/spreads/random_card";
  const [singleCard, setSingleCard] = useState("https://tarot-api.s3.amazonaws.com/images/major/5.jpg");

  function handleClick() {
    fetch(randomCard).then((r) => {
        if (r.ok) {
          r.json().then((card) => {
            let reversedBool = Math.random() < 0.5;
            let fullCard = {...card[0], reversedCard: reversedBool}
            setSingleCard(fullCard)
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
    <div className="cardSlots"><CardSlot singleCard={singleCard}/></div>
    <div className="buttonDiv">
    <button className='cardButton' onClick={handleClick}>Single Card</button>
    </div>
    </div>
  );
}

export default App;
