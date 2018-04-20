import React from 'react';

const Landing =()=>{
    return(
        <div className="super-background">
            <div className='background' style={{background: `url(/images/webapp/landing-page.jpg)`}}>
                <div className='logo' style={{background: `url(/images/webapp/perfit.png)`}}>
                </div>
                <div className="tagline">
                    Simple Personalized Stylist, with touch of surprise.
                </div>
                <button className="button-round">Next step</button>
            </div>
        </div>
    )
}

export default Landing
