import React from 'react';

import { content } from '../data';

const About = () => {
    return (
        <>
            <div className="container">
                <p className="my-3">{content.text.about[0]}</p>
            </div>
            <div className="container">
                <p className="my-3">{content.text.about[1]}</p>
            </div>
        </>
    );
}

export default About;