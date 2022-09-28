import React from 'react'
import '../css/Master.css'

const cardComparisonDetail = ({ card }) => {
  

  return (
    <li
      key={card._id}
      className='card-detail'
    >
      <h3 id='card-name'>{card.Individual}</h3>

      <img
        className='character-image'
        src={card.img_url}
        alt='Simpsons character'
      />
      <p className='card-category'>Most Loveable: {card['Most Lovable']}</p>
      <p className='card-category'>Smartest: {card.Smartest}</p>
      <p className='card-category'>Fattest: {card.Fattest}</p>
      <p className='card-category'>Biggest Nerd: {card['Biggest Nerd']}</p>
      <p className='card-category'>
        Greatest Anarchist: {card['Greatest Anarchist']}
      </p>
      <p className='card-category'>
        Walk of Fame Rating: {card['Walk of Fame Rating']}
      </p>
    </li>
  )
}

export default cardComparisonDetail
