import React, { useState } from 'react'
import QuoteBox from './QuoteBox'
import quotes from '../json/quotes.json'
import color from '../utils/colors'



const QuoteInfo = () => {

     // Esta funcion calcula un indice Random
  const getIndexRandom = arr => Math.floor(Math.random() * arr.length) 

  // Aqui se extrae el elemento segun el indice random
  const firstQuote = quotes[getIndexRandom(quotes)]
  const firstColor = color[getIndexRandom(color)]

  const [randomQuote, setRandomQuote] = useState(firstQuote)
  const [randomColor, setRandomColor] = useState(firstColor)

  // Esta funcion calcula tanto un quote como un color random
  const getRandomAll = () => {
    setRandomQuote(quotes[getIndexRandom(quotes)])
    setRandomColor(color[getIndexRandom(color)])

  } 


  return (

    <main style={{backgroundColor: randomColor}} className="quoteInfo"> 
        <QuoteBox 
        randomQuote={randomQuote} 
        randomColor ={randomColor}
        getRandomAll ={getRandomAll}
        />
    </main>

  )
}

export default QuoteInfo