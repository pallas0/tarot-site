import './App.css';
import CardSlot from './CardSlot';
import React, {useEffect, useState} from 'react'
import ThreeCardSpread from './ThreeCardSpread';

function App() {

  const randomCard = "http://localhost:3000/api/v1/spreads/random_card";
  const threeRandomCards = "http://localhost:3000/api/v1/spreads/three_cards"
  const [singleCard, setSingleCard] = useState();
  const [singleDisplay, setSingleDisplay] = useState(true);
  const [threeCards, setThreeCards] = useState(["https://tarot-api.s3.amazonaws.com/images/major/5.jpg", "https://tarot-api.s3.amazonaws.com/images/major/5.jpg", "https://tarot-api.s3.amazonaws.com/images/major/5.jpg"])

  function getCard(link) {
    return fetch(link).then((r) => {
      if (r.ok) {
        return r.json();
      }
      else {
        throw new Error("haha nope")
      }
    })
  }

  function parseSingleCard(cardObj) {
    let reversedBool = Math.random() < 0.5;
    let fullCard = {...cardObj[0], reversedCard: reversedBool}
    return fullCard;
  }

  function handleSingleClick() {
    setSingleDisplay(true);
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

  function handlePPFClick() {
    setSingleDisplay(false);
    getCard(threeRandomCards)
    .then((r) => {
      //console.log(r)
      setThreeCards(r)
    })

    console.log(threeCards)
  }
  

  return (
   <div className='wholePage'>
    <h1 className="header">Tarot Reading~</h1>
    <div className="cardSlots">
      {!singleDisplay && threeCards ? <ThreeCardSpread cards={threeCards}/> : singleDisplay && singleCard ? <CardSlot singleCard={singleCard}/> : 
      <h3>Press a button to get your reading</h3>}
      </div>
    <div className="buttonDiv">
    <button className='cardButton' onClick={handleSingleClick}>Single Card</button>
    <button onClick={handlePPFClick}>Past, Present, and Future</button>
    </div>
    </div>
  );
}

export default App;


