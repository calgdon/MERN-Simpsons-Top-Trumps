import React from 'react'
import { Link } from 'react-router-dom'
import '../css/title.css'
import blah from '../images/a1f115ae1d5262c8db205ffadd918ef8 (1).png'



const Title = () => {
  return (  

    <>

  <div className='logo'>
  <img className="Main-logo" src={blah} alt="Simpsons Top Trumps Logo" />
  </div>

  
  <div className ='flex-container'>
   <div className='title-button'>
   

   <Link to="/play">Play</Link>
  
   </div>

  <div className='title-button'>
  <Link to="/cards">Cards</Link>
  </div>

  <div className='title-button'>
  <Link to="/rules">Rules</Link>
  </div>
  </div>

   
    </>

    
  
  
  )
}

export default Title