import React, { useState } from 'react';

import '../css/topbar.css';

const urlParams = new URLSearchParams(window.location.search);
const q = urlParams.get('q');

const Topbar = () => {
    const [searchValue, setSearchValue] = useState(q || "");

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    }

    const search = (e) => {
        e.preventDefault();
        if (searchValue) {
            window.location.href = "/search?q=" + searchValue;
        }
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-light topbar">
            <div id="nav-wrapper" className="container">
                <a className="navbar-brand mb-0 h1" href="/">
                    <img src='/images/logo.png' height="50" alt=""/>
                </a>
                <form className="form-inline">
                    <div className="input-group">
                        <input className="form-control mr-0 searchbox" id="searchbox" type="search" placeholder="Search this site" aria-label="Search" required
                            onChange={handleSearch}
                            value={searchValue}
                        />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary my-sm-0" onClick={search} type="submit"
                                onChange={handleSearch}>Search</button>
                        </div>
                    </div>
                </form>
                {window.innerWidth > 991 ?
                <span className="navbar-text">
                    <strong>Hotline: 01712345678</strong>
                </span>
                : null }
            </div>
        </nav>
    );
}

export default Topbar;