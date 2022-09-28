import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Master.css'
import blah from '../images/a1f115ae1d5262c8db205ffadd918ef8 (1).png'



const Title = () => {
  return (  

    <>

  <div >
  <img id='main-logo' src={blah} alt="Simpsons Top Trumps Logo" />
  </div>

  
  <div className ='title-flex-container'>
   

   <Link className='general-button' to="/play">Play</Link>
  

  <Link className='general-button' to="/cards">Cards</Link>

  <Link className='general-button' to="/rules">Rules</Link>
  </div>

   
    </>

    
  
  
  )
}

export default Title