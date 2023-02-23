import React from 'react'
import './Feature.css'
import { Button } from 'react-bootstrap'

function Feature() {
    return (
        <div className='feature'>
            <div className='overly'></div>
            <div className='container'>
                <h1>Pizza of the Day</h1>
                <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
                <Button className='btn'>Order Now</Button>
            </div>
        </div>
    )
}

export default Feature;