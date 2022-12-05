import React from 'react'

export default function HeadingTile(props:any) {
    return (
        <div>
           <section id="inner-headline">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" style={{display : 'flex' , justifyContent : 'space-between'}}>
              <h2 className="pageTitle">{props.heading}</h2>
              <h2 style={{color : 'white' }}> Add Course </h2>
            </div>
          </div>
        </div>
      </section>  
        </div>
    )
}
