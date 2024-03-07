import { useState } from "react";



function Card({img1, img2}){
    const [cardflip, setCardFlip] = useState(false);
    return (
      <div className="w-6 h-4">
        {cardflip ? (
          <img className="card-front" src={img1} alt="Card Front" />
        ) 
        : 
        (
          <img className="card-back" onClick={() => setCardFlip(true)} src={img2} alt="Card Back" />
        )}
      </div>
    )
  }

export default Card