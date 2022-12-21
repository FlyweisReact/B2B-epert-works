import React from 'react'
import './HomePge.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch
} from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
  <div className='myNav'>
    <div className='up'>
        <img src='https://experts-work.netlify.app/static/media/logo.243071f1.png' alt='' style={{width : '100%'}} />
    </div>
    <div className='mid'>
      <input type='search' />
    </div>
    <div className='down'>
      <ul>
        <li>Home</li>
        <li>Course</li>
        <li>Resources</li>
        <li>Login|<span>Signup</span></li>
        <li>FOLLOW US</li>
      </ul>
    </div>
  </div>
  )
}

export default HomePage