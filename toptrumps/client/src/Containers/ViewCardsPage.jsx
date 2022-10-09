import React from 'react'
import CardForm from '../components/CardForm'
import CardGrid from '../components/CardGrid'
import NavBar from '../components/Navbar'
import SearchCards from '../components/SearchCards'
import "../css/Master.css"

const ViewCardsPage = ({cards, addNewCard, deleteCardFromCards, search, setSearch}) => {

  return (
    <>
    <NavBar/>
    <div id='ViewCardsPage'>
    <div><CardGrid cards={cards} search={search} deleteCardFromCards={deleteCardFromCards}/>
    </div>
    <div>
    <SearchCards setSearch={setSearch}/>
    <CardForm addNewCard={addNewCard} />
    </div>
    </div>
    </>
  )
}

export default ViewCardsPage