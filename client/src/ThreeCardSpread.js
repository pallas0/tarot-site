import React from "react";
import CardSlot from "./CardSlot";

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