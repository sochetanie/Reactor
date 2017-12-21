import React, { Component } from 'react'
import image1 from '../images/1.png'
import image2 from '../images/2.png'

export default class CenterSection extends Component{
    render(){
        return (
            <div className='container-what'>
                <div className="row" >
                    <div className="col-lg-3 col-md-3">
                        <img alt="alla gorik" src={image1}/>
                    </div>
                    <div className="col-lg-3 col-md-3 text">
                        <h3>Regional Cuisine Down Home Southern Cooking</h3>
                        <p>The quick brown fox jump over a lazy dog. DJs flock by
                            when MTV ax quiz prog. Junk MTV  quiz graced by fox whelps.
                            Bawds jog, flick quartz, vex mymphs.</p>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <img alt='alla' src={image2}/>
                    </div>
                    <div className="col-lg-3 col-md-3 text">
                        <h3>Post Hardware More Options In Less Space</h3>
                        <p>The quick brown fox jump over a lazy dog. DJs flock by
                            when MTV ax quiz prog. Junk MTV  quiz graced by fox whelps.
                            Bawds jog, flick quartz, vex mymphs.</p>
                    </div>
                </div>
            </div>
        )
    }
}