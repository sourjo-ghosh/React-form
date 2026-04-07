import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {
    const [Products, setProducts] = useState([])
    console.log(Products.length)
    // const HandleNewProducts = newProduct =>{
    //     const newProducts = [...Products,]
    // } 
    return (
        <div>
            <ProductForm setProducts={setProducts} Products={Products}></ProductForm>
            <ProductTable Products={Products}></ProductTable>
        </div>
    );
};

export default ProductManagement;