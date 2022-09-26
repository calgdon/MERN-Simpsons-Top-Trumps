import React from 'react'
import CardForm from '../Components/CardForm'
import CardGrid from '../Components/CardGrid'

const ViewCardsPage = ({cards, addNewCard}) => {
  return (
    <>
    <div>ViewCardsPage</div>
    <CardForm addNewCard={addNewCard}/>
    <CardGrid cards={cards}/>

    </>
  )
}

export default ViewCardsPage