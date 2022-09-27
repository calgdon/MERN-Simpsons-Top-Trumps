import React from 'react'
import { Link } from 'react-router-dom'
import './title.css'


const Title = () => {
  return (
    <>
    <h1>Top Trumps : The Simpsons</h1>
   <div className='button'>
    <button>
    <Link to="/cards">Cards</Link></button>
    <button>
    <Link to="/rules">Rules</Link></button>
    <button>
    <Link to="/play">Play</Link>
    </button>
   </div>
    </>
  
  )
}

export default Title