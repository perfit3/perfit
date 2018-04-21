import React from 'react';

const Landing =()=>{
    return(
        <div className="super-background">
            <div>
                <div className='background'>
                    <img className="logo" src="images/webapp/perfit.png" alt="logo"/>
                <div className="tagline">
                    Simple Personalized Stylist, with touch of surprise.
                </div>
                    <button type="button" className="btn-lg btn btn-warning round-it">Next step</button>
                </div>
            </div>
            <div className="text-zone">
                <div className='step-1'>
                    <div className="mini-title">steps to style</div>
                    <div className="step-no">01</div>
                    <span className="step-content">Fill up your style preference form. 
                    This will allow us to understand your taste and
                    send you clothes you like.</span>
                </div>
                <div className='step-2'>
                    <div className="mini-title">steps to style</div>
                    <div className="step-no">02</div>
                    <span className="step-content">Using your preferences, we run cutting edge machine learning analysis to
                    find the clothes that fits your preferences.</span>
                </div>
                <div className='step-3'>
                    <div className="mini-title">steps to style</div>
                    <div className="step-no">03</div>
                    <span className="step-content">Receive your personalized surprise box from us with clothes
                    that fits your style and give you a change in clothing style you never expected!</span>
                </div>
            </div>
        </div>
    )
}

export default Landing
