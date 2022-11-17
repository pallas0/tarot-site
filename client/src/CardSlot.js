import React from 'react'

function CardSlot({singleCard}) {
    
    console.log(singleCard)

    return (
      <div>
        <img
          src={singleCard.image}
          alt="tarot card"
        />
        <div className="cardText">
          <h3>{singleCard.name}</h3>
          {/* <h4>{singleCard.upright}</h4> */}
          {singleCard.reversedCard ? <h4>{singleCard.reversed}</h4> : <h4>{singleCard.upright}</h4>}
          <p>
            {singleCard.summary}
          </p>
        </div>
      </div>
    );
}

//fields:
//image ->click for full meaning {full_meaning} <- show this message w hover function 
//name (, reversed)
//upright || reversed
//summary

//to be done:
//add chance for card reversed, update description and summary to reflect this
//replace filler card (upon initial load) w something blank
//[eventually] add hover instruction on card image to click for full card description
export default CardSlot;