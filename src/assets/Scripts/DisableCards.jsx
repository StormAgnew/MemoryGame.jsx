import React from 'react'
import AnimalImgs from './AnimalImgArray'

function DisableCards() {
  document.getElementById(AnimalImgs.id).classList.add("disabled")
  
}

export default DisableCards