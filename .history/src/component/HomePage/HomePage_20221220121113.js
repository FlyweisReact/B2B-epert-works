import React from 'react'

const HomePage = () => {
  return (
  <div className='myNav'>
    <div className=''>
        <img src='https://experts-work.netlify.app/static/media/logo.243071f1.png' alt='' style={{width : '100%'}} />
    </div>
    <div>
      <input type='search' />
    </div>
    <div>
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