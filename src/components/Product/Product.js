import React from 'react'
import './Product.css'
import { Button, Card } from 'react-bootstrap'
import { productData } from './data'

function Product() {
    const data = productData.map((item, index) => {
        return (
            <Card key={index} className='card'>
                <Card.Img className='img' variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title className='title'>{item.name}</Card.Title>
                    <Card.Text className='desc'>
                        {item.desc}
                    </Card.Text>
                    <Card.Text className='price'>{item.price}</Card.Text>
                    <Button className='btn' variant="primary">{item.button}</Button>
                </Card.Body>
            </Card>
        )
    })
    return (
        <div className='product'>
            <div className='container'>
                <div className='head'>
                    <h1>Choose your favorite</h1>
                </div>
                <div className='box'>
                    {data}
                </div>
            </div>
        </div>
    )
}

export default Product