import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './ProductDetail.css'

function GetPageId() {
    return new URLSearchParams(window.location.search).get("id");
}


export default function ProductDetail() {    
    const [product,setProduct]=useState({});
    useEffect(() => {
        console.log(GetProduct(GetPageId()));
    }, []) 

    const GetProduct= async (id)=>{
        let result =  await axios.get("https://dummyjson.com/products/"+id)
        let product = await result.data;
        console.log(product);
        setProduct(product);
        return await product;
    }
    return(
    <div className="container">
       <div>{product.id}</div>
    </div>
  );
}
