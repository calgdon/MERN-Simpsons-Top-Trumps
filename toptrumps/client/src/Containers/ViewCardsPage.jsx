import React from 'react'
import CardForm from '../components/CardForm'
import CardGrid from '../components/CardGrid'

const ViewCardsPage = ({cards, addNewCard}) => {
  return (
    <>
    <div>ViewCardsPage</div>
    <CardForm addNewCard={addNewCard}/>
    {/* <CardGrid cards={cards}/> */}

    </>
  )
}

export default ViewCardsPage