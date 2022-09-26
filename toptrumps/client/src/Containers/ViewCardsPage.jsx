import React from 'react'
import CardForm from '../components/CardForm'
import CardGrid from '../components/CardGrid'

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