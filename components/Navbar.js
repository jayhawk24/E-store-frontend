import React from 'react';

function Navbar() {
    return (
        <div>
            <div id="menuicon">
                <div id="menuline"></div>
            </div>

            <div id="mainmenu">
                <nav>
                    <div className="logo">
                        <img src="logo.png" alt="" />
                        <a href="/">Shop</a>
                    </div>
                    <ul>
                        <li>Fashion</li>
                        <li>Electronics</li>
                        <li>Food</li>
                    </ul>

                    <div className="icons-user">
                        {/* <% if(!currentUser){ %> */}

                        <a href="/login" className="btn-sec">
                            Login
                        </a>
                        <a href="/register" className="btn-sec blue">
                            Sign Up
                        </a>

                        {/* <% } else{ %> */}
                    </div>

                    <div id="close">
                        <i className="fa fa-close"></i>
                    </div>
                </nav>
            </div>
            <div className="padding"></div>
        </div>
    );
}

export default Navbar;
