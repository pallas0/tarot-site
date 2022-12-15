import React from "react";
import CardSlot from "./CardSlot";


//personal note - is there a way to display all three cards on the page? cannot call the card[0], could they be defined?  
// in typescript theres a way to create one big data object with data endpoints

// let cardOne = cards[0]
// let cardTwo = cards[1]


// let cardThree = cards[2]

function ThreeCardSpread({cards}) {
    return (
        <div>

            
            <h1>Past</h1>
            <CardSlot singleCard={cards[0]}/>
            <h1>Present</h1>
            <CardSlot singleCard={cards[1]}/>
            <h1>Future</h1>
            <CardSlot singleCard={cards[2]}/>
        </div>
    )
}

export default ThreeCardSpread;