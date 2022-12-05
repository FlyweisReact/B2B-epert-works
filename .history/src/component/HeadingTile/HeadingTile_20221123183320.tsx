import React from 'react'

export default function HeadingTile(props:any) {
    return (
        <div>
           <section id="inner-headline">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" style={{disp}}>
              <h2 className="pageTitle">{props.heading}</h2>
              <span style={{color : 'white' }}> Add Course </span>
            </div>
          </div>
        </div>
      </section>  
        </div>
    )
}
