import React from 'react'

export default function HeadingTile(props:any) {
    return (
        <div>
           <section id="inner-headline">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 Head" >
              <h2 className="pageTitle">{props.heading}</h2>
              <h2 > Add Course </h2>
            </div>
          </div>
        </div>
      </section>  
        </div>
    )
}
