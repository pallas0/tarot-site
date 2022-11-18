import './App.css';
import CardSlot from './CardSlot';
import React, {useEffect, useState} from 'react'

function App() {

  const randomCard = "http://localhost:3000/api/v1/spreads/random_card";
  const [singleCard, setSingleCard] = useState("https://tarot-api.s3.amazonaws.com/images/major/5.jpg");
  const [singleDisplay, setSingleDisplay] = useState(true);

  function dealCard() {

    let fullCard;
    fetch(randomCard).then((r) => {
      if (r.ok) {
        r.json().then((card) => {
          let reversedBool = Math.random() < 0.5;
          fullCard = {...card[0], reversedCard: reversedBool}
          console.log(fullCard)
        });
      }
      else {
        throw new Error("haha nope")
      }
    })

    return fullCard;
    //ok this doesn't work for a reason I strongly suspect has something to do w fetch calls being async
    //... should probably figure out wtf that means and handle it accordingly
    //possible workaround - store intended return value in a state function
    //[would like to understand wtf's happening though] -- I mean it's either an async thing or a scope thing
    //[hmmmmmm]
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
    let test = dealCard();
    console.log(test);
  }
  

  return (
   <div className='wholePage'>
    <h1 className="header">Tarot Reading~</h1>
    <div className="cardSlots">
      {singleDisplay ? <CardSlot singleCard={singleCard}/> : 
      null}
      {/* <CardSlot singleCard={singleCard}/> */}
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

