import React from 'react';

import { MenuLink } from '../helpers';
import { links } from '../data';

const menulinks = links.map((link, index) => 
    <MenuLink 
        key={index}
        activeOnlyWhenExact={link.activeOnlyWhenExact} 
        to={link.to} 
        label={link.label} />
);

const Menubar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{...style}}>
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    {window.innerWidth < 992 ? 
                        <span class="navbar-text"><strong>Hotline: 01712345678</strong></span>
                         : null}
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        {menulinks}
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

const style = {
    borderRadius: 10,
    boxShadow: '2px 2px 5px grey'
}

export default Menubar;