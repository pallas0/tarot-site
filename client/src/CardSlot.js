import React from 'react'

function CardSlot({singleCard}) {
    
    console.log(singleCard)

    return (
      <div>
        <div className='individualCard'>
         <img
          src={singleCard.image}
          alt="tarot card"
          className='cardImageArea'
        />
         <div className="cardText">
          {singleCard.reversedCard ? <h3>{singleCard.name}, reversed</h3> : <h3>{singleCard.name}</h3>}
          {singleCard.reversedCard ? <h4>{singleCard.reversed}</h4> : <h4>{singleCard.upright}</h4>}
          {singleCard.reversedCard ? null : <p>
            {singleCard.summary}
          </p>}
        </div>
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
//replace filler card (upon initial load) w something blank
//[eventually] add hover instruction on card image to click for full card description
export default CardSlot;