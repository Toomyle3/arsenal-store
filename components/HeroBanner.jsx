import Link from 'next/link';
import React from 'react';
import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  return (
    <div className="hero-banner-container">
        <div>
            <p className="beats-solo">{desc}</p>
            <h3>{midText}</h3>
            <h1>10% OFF</h1>
            <img src = {urlFor(image)} alt="shirts"
             className='hero-banner-image'></img>
             
            <div>
                <Link href={`/product/${product}`}>
                    <button type="button">{buttonText}</button>
                </Link>
            </div>
            <div className='desc'>
                <h5>Description</h5>
                <p style={{color:"white"}}>{desc}</p>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner