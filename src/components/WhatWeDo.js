import React, { Component } from 'react'

export default class WhatWeDo extends Component{
    render(){
        let sideBySideStyle = {
            float: 'left',
            width: '50%',
            overflow:'hidden'
        }
        return(
            <section className='container whatWeDo'>
            <div className='whatwedo' >
                <div className="col-lg-6 col-md-6 col-sm-6 redWhatWeDo" style={sideBySideStyle}>
                    <h1>WHAT WE DO</h1>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 weDo" style={sideBySideStyle}>
                    <h2>We do</h2>
                    <p>The quick brown fox jump over a lazy dog. <br />DJs flock by when MTV ax quiz prog. <br />Junk MTV  quiz graced by fox whelps.<br />Bawds jog, flick quartz, vex mymphs.
                    </p>
                </div>
            </div>
            </section>
        )
    }
}
