import React from 'react'
import CardForm from '../Components/CardForm'
import CardGrid from '../Components/CardGrid'

const ViewCardsPage = ({cards}) => {
  return (
    <>
    <div>ViewCardsPage</div>
    <CardGrid cards={cards}/>
    <CardForm addCard={addCard}/>
    </>
  )
}

export default ViewCardsPage