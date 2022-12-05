import React from 'react'
import Navbar from '../Header/Navbar/Navbar'
import HeadingTile from '../HeadingTile/HeadingTile'

const Live = [
    {
        img : 'https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg',
        heading : 'Machine Learning'
    },
    {
        img : 'https://d3s24np0er9fug.cloudfront.net/phase1/courses/automation/beginner/beginner.jpg',
        heading : 'Python Couse'
    },
    {
        img : 'https://d3s24np0er9fug.cloudfront.net/phase1/courses/maclearnbeginner/beginner1.jpg'
    },
    {
        img : 'https://d3s24np0er9fug.cloudfront.net/phase1/courses/azure/beginner/beginner.jpg'
    },
]

const Training = () => {
  return (
   <>
    <Navbar />
    <HeadingTile  heading="Live Training"/>


    <section
        className="main-card--container"
        style={{ color: "black", marginBottom: "10%" }}
      >
        {Live.map((i) => {
          return (
            <>
              <div className="card-container">
                <div className="card">
                  <div className="card-body">
                    <img
                      src={i.img}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>

   </>
  )
}

export default Training