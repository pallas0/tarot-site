import React from "react";
import CardSlot from "./CardSlot";

function ThreeCardSpread({cards}) {
    return (
        <div>
            <CardSlot singleCard={cards[0]}/>
            <CardSlot singleCard={cards[1]}/>
            <CardSlot singleCard={cards[2]}/>
        </div>
    )
}

export default ThreeCardSpread;