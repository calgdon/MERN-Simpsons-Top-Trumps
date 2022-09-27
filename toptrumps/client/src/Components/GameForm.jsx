import React from 'react'
import '../css/gameform.css'
import toptrumpback from '../images/toptrumpback.jpeg'

const GameForm = ({ card, playGameRound, controllingPlayer, playerNumber }) => {
  console.log('gameformcard', card)

  const handleClick = (e) => {
    e.preventDefault()
    playGameRound(e.target.value)
  }


  const playerCardRender = 
    controllingPlayer == playerNumber ? (
      <div className='card-detail'>
        <form action=''>
          <p> {card.Individual} </p>
          <br />
          <img
            className='character-image'
            src={card.img_url}
            alt='Photo of simpsons character'
          />
          <br />
          <button
            className='cardbutton'
            onClick={handleClick}
            value={'Most Lovable'}
          >
            Most Lovable: {card['Most Lovable']}
          </button>{' '}
          <br />
          <button
            className='cardbutton'
            onClick={handleClick}
            value={'Smartest'}
          >
            Smartest: {card['Smartest']}
          </button>{' '}
          <br />
          <button
            className='cardbutton'
            onClick={handleClick}
            value={'Fattest'}
          >
            Fattest: {card['Fattest']}
          </button>{' '}
          <br />
          <button
            className='cardbutton'
            onClick={handleClick}
            value={'Biggest Nerd'}
          >
            Biggest Nerd: {card['Biggest Nerd']}
          </button>{' '}
          <br />
          <button
            className='cardbutton'
            onClick={handleClick}
            value={'Greatest Anarchist'}
          >
            Greatest Anarchist: {card['Greatest Anarchist']}
          </button>{' '}
          <br />
          <button
            className='cardbutton'
            onClick={handleClick}
            value={'Walk of Fame Rating'}
          >
            Walk of Fame Rating: {card['Walk of Fame Rating']}
          </button>{' '}
        </form>
      </div>
    ) : (
      <img src={toptrumpback} />
    )

  return (
  <>
  {playerCardRender}
  </>
  )
  
}

export default GameForm
