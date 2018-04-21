import React from 'react';

const Footer = () => {
    return(
        <div>
            <header className='footer'>
                <div className="brand">Perfit</div>
                <div>Sign up now and fill up your preferences form</div>
                <button type="button" className="btn btn-lg btn-outline-light">Next step</button>
                <div className="footer-link">
                    <a href="#">About us</a>
                    <a href="#">Term of service</a>
                    <a href="#">privacy policy</a>
                    <a href="#">Contact us</a>
                </div>
                
                <div className="copyright">&#169; Perfit 2018 All Rights Reserved</div>
            </header>
        </div>
    )
}

export default Footer