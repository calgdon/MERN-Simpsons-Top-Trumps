import React from 'react'
import { Link } from 'react-router-dom'
import '../css/title.css'
import blah from '../images/a1f115ae1d5262c8db205ffadd918ef8 (1).png'



const Title = () => {
  return (

    

    <>
    <h1>Top Trumps : The Simpsons</h1>
  
  

   <div className='button'/>
   <button>
   <Link to="/play">Play</Link>
   </button>
   <button>
    <Link to="/cards">Cards</Link>
    </button>
    <button>
    <Link to="/rules">Rules</Link>
    </button>
   </div>
   <img className="Main-logo" src={blah} alt="Simpsons Top Trumps Logo" />

    </>

    
  
  
  )
}

export default Title