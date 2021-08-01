import React from 'react';

function Navbar() {
    return (
        <div>
            <div id="menuicon">
                <div id="menuline"></div>
            </div>

            <div id="mainmenu">
                <nav>
                    <div class="logo">
                        <img src="logo.png" alt="" />
                        <a href="/">Shop</a>
                    </div>
                    <ul>
                        <li>Fashion</li>
                        <li>Electronics</li>
                        <li>Food</li>
                    </ul>

                    <div class="icons-user">
                        {/* <% if(!currentUser){ %> */}

                        <a href="/login" class="btn-sec">
                            Login
                        </a>
                        <a href="/register" class="btn-sec blue">
                            Sign Up
                        </a>

                        {/* <% } else{ %> */}
                    </div>

                    <div id="close">
                        <i class="fa fa-close"></i>
                    </div>
                </nav>
            </div>
            <div class="padding"></div>
        </div>
    );
}

export default Navbar;
