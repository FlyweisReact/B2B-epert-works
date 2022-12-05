import React from 'react'
import Navbar from '../Header/Navbar/Navbar'
import HeadingTile from '../HeadingTile/HeadingTile'

const Live = [
    {
        img : ''
    }
]

const Training = () => {
  return (
   <>
    <Navbar />
    <HeadingTile  heading="Live Training"/>
    <img src='https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg' alt='' />
   </>
  )
}

export default Training