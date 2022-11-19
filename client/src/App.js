import './App.css';
import CardSlot from './CardSlot';
import React, {useEffect, useState} from 'react'

function App() {

  const randomCard = "http://localhost:3000/api/v1/spreads/random_card";
  const threeRandomCards = "http://localhost:3000/api/v1/spreads/three_cards"
  const [singleCard, setSingleCard] = useState("https://tarot-api.s3.amazonaws.com/images/major/5.jpg");
  const [singleDisplay, setSingleDisplay] = useState(true);
  const [threeCards, setThreeCards] = useState([])

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
      {singleDisplay ? <CardSlot singleCard={singleCard}/> : 
      null}
      </div>
    <div className="buttonDiv">
    <button className='cardButton' onClick={handleSingleClick}>Single Card</button>
    <button onClick={handlePPFClick}>Past, Present, and Future</button>
    </div>
    </div>
  );
}

export default App;

//ok let's pseudocode this shit --
//if 'single card' is pressed ...
//actually, fuck it -- let's stick a ternary in the cardSlots div that returns whether
//it's a singleCard draw or multiCard draw (cool cool cool)


//motherfucking DRY principle --- ok rather than having a fuck ton of fetch calls, let's
//rewrite that function so each handleClick can call it and get a card set

