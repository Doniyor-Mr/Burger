import React from 'react';
import Productbox from "./Productbox";
import pimage1 from '../images/s1.png'
import pimage2 from '../images/s2.png'

function Product() {
    return (
        <div id="products">
            <h1>CHOOSE & ENJOY</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, possimus, sapiente? Ipsa labore
                quibusdam vero!</p>
            <div className="a-container">
                <Productbox image={pimage1} title="Lugar Burger"/>
                <Productbox image={pimage2} title="Le Pigeon Burger"/>
                <Productbox image={pimage1} title="Lugar Burger"/>

            </div>
        </div>
    )
}

export default Product;
