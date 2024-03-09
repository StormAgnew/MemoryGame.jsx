import { useState } from "react"
import AnimalImgs from "./assets/Scripts/AnimalImgArray"
import CardBack from './assets/CardBack/CardBack.jpg'
import Card from './assets/Scripts/CardFlip'

export default function cardGame() {
  
  let hasCardFliped = false;

  function CardFlip(){
    if(!hasCardFliped){
      hasCardFliped = true;
      console.log()
    }
  }

  return (
    <>
      <section className='memory-game'>
       {AnimalImgs.map((animal)=>
          <Card key={animal.id} img1={animal.animalimg} img2={CardBack}>
          </Card>
       )}
      </section>
    </>
  )
}


