import React from 'react';

import './header.scss';

const Header = () => {
    return (
        <header>
            <h1>
                Star DB
            </h1>
            <ul className="menu_items">
                <li>
                    <a href='/people'>
                        People
                    </a>
                </li>
                <li>
                    <a href='/planets'>
                        Planets
                    </a>
                </li>
                <li>
                    <a href='starship'>
                        Starship
                    </a>
                </li>
            </ul>
        </header>
    )
};

export default Header;