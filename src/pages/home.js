import React from 'react';

import '../css/home.css';

import { content } from '../data';

const Home = () => {
    return (
        <div className="container text-center">
            <div className="jumbotron jumbotron-home">
                <h1 className="display-4">{content.text.home[0]}</h1>
                <p className="lead">{content.text.home[1]}</p>
                <hr className="my-4"/>
                <a className="btn btn-primary btn-lg mb-3" href="#" role="button">Get a Quote</a>
                <p>{content.text.home[2]}</p>
            </div>
        </div>
    );
}

export default Home;