import React from 'react'
import CardForm from '../components/CardForm'
import CardGrid from '../components/CardGrid'
import NavBar from '../components/Navbar'
import "../css/viewcardspage.css"

const ViewCardsPage = ({cards, addNewCard, deleteCardFromCards}) => {
  return (
    <>
    <NavBar/>
    <div className='ViewCardsPage'>
    <CardGrid cards={cards} deleteCardFromCards={deleteCardFromCards}/>
    <CardForm addNewCard={addNewCard} />
    </div>
    </>
  )
}

export default ViewCardsPage