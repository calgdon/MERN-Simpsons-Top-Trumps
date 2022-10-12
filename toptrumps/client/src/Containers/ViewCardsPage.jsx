import React from 'react'
import CardForm from '../Components/CardForm'
import CardGrid from '../Components/CardGrid'
import NavBar from '../Components/Navbar'
import SearchCards from '../Components/SearchCards'
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
