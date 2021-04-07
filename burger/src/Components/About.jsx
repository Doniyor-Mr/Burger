import React from 'react';
import aboutImg from '../images/about.png'

function About() {
    return (
        <div id="about">
            <div className="about-text">
                <h1>UPCOMING EVENT</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque inventore minus nobis odit optio
                    placeat, quisquam. Aperiam deserunt dignissimos doloremque dolorum incidunt, repellendus rerum
                    soluta!</p>
                <button>READ MORE</button>
            </div>
            <div className="about-image">
                <img src={aboutImg} alt=""/>
            </div>
        </div>
    )
}

export default About;