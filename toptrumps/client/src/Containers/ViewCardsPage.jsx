import React from 'react'
import CardForm from '../components/CardForm'
import CardGrid from '../components/CardGrid'
import NavBar from '../components/Navbar'
import "../css/Master.css"

const ViewCardsPage = ({cards, addNewCard, deleteCardFromCards}) => {
  return (
    <>
    <NavBar/>
    <div id='ViewCardsPage'>
    <div><CardGrid cards={cards} deleteCardFromCards={deleteCardFromCards}/>
    </div>
    <div>
    <CardForm addNewCard={addNewCard} />
    </div>
    </div>
    </>
  )
}

export default ViewCardsPage