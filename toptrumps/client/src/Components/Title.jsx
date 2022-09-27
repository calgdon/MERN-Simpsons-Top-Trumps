import React from 'react'
import { Link } from 'react-router-dom'
import '../css/title.css'


const Title = () => {
  return (
    <>
    <div>Title</div>
    // two buttons - play and view cards
    <Link to="/play">to the play page</Link>
    </>
  )
}

export default Title