import React from 'react'

export default function HeadingTile(props:any) {

  const navigate  = useNav

    return (
        <div>
           <section id="inner-headline">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 Head" >
              <h2 className="pageTitle">{props.heading}</h2>

              <h2 className='MenuH'> Add Course </h2>
            </div>
          </div>
        </div>
      </section>  
        </div>
    )
}