import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
const header = () => {
  return (
    <div className='header'>
    <Link to="/" className='title'>Quiz 2 Me</Link>
    <hr className='line'/>
    </div>
  )
}

export default header