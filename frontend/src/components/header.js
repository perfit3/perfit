import React from 'react';
 
const Header = () => {
    return(
        <div>
                <header>
                    <ul className="nav">
                        <li className="nav-item">
                            <a class="navbar-brand" href="/">Perfit</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">How it works</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Brands</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">contact us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">sign in</a>
                        </li>
                    </ul>
                </header>        
        </div>
    )
}

export default Header

