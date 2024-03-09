import { useState } from "react";
import MatchCheck from "./MatchCheck";

let hasCardFlipped = false;
let firstCard, secondCard;

function CardFlip(){
if(!hasCardFlipped){
  hasCardFlipped = true;
  firstCard = this
  return; 
}
  secondCard = this;
  hasCardFlipped = false;

  MatchCheck()
}


function Card({img1, img2}){
    let [cardflip, setCardFlip] = useState(false);
    return (
      <div className="card">
        {cardflip ? (
          <img className="card-front" src={img1}  alt="Card Front" />
        ) 
        : 
        (
          <img className="card-back" onClick={() => {setCardFlip(true); CardFlip()}} src={img2} alt="Card Back" />
        )}
      </div>
    )
  }

export default Card