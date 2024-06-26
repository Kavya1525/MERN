import React, { useEffect, useState } from 'react'
import Card from './Card'

const MyCard = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(result=>result.json())
        .then(data=>{
            setProducts(data.products)
        })
    },[]);
    return (
    <div className = "container mt-4 d-flex flex-wrap">
    {products.map((product)=>(
        <Card
        id={product.id}
        key={product.id}
        title={product.title}
        description={product.description}
        price={product.price}
        brand={product.brand}
        category={product.category}
        thumbnail={product.thumbnail}
        />
        ))}
            </div>
        )
    }

export default MyCard