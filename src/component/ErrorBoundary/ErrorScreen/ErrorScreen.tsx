import React from 'react'
import {Link} from 'react-router-dom'
import "./ErrorScreen.css"
export default function ErrorScreen() {
    return (


        <div className="error-loading">
            <h2>Unexpected Error <b>:(</b></h2>
            <div className="gears">
                <div className="gear one">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="gear two">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="gear three">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
                <div><span><Link to="/">Go to Home</Link></span> </div>

        </div>

    )
}
