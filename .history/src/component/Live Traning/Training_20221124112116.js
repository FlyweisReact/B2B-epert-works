import React from 'react'
import Navbar from '../Header/Navbar/Navbar'
import HeadingTile from '../HeadingTile/HeadingTile'

const Live = [
    {
        img : 'https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg'
    }
]

const Training = () => {
  return (
   <>
    <Navbar />
    <HeadingTile  heading="Live Training"/>
   </>
  )
}

export default Training