import React, {useEffect, useState} from 'react'

function SingleCard() {

    const [singleCard, setSingleCard] = useState(null);
    const randomCard = "http://localhost:3000/api/v1/spreads/random_card";

    function handleClick() {
        //console.log("hooray for small victories")
        fetch(randomCard).then((r) => {
            if (r.ok) {
              r.json().then((card) => {
                //console.log(card[0])
                setSingleCard(card[0])
              });
            }
            else {
              throw new Error("haha nope")
            }
          })

    }
    return (
        <button className='cardButton' onClick={handleClick}>Single Card</button>
    )
}


//goal: get a random card drawn and stored in state in App
//goal after that: get CardSlot component built out
//goalt after that: fill (middle) CardSlot with randomly drawn card

export default SingleCard;