import React from 'react';

const ProductForm = ({setProducts, Products}) => {
    const HandleSubmit = e =>{
        e.preventDefault()
        const ProductName = e.target.name.value
        const ProductPrice = e.target.price.value
        const ProductQuantity = e.target.quantity.value
        // console.log(ProductName, ProductPrice, ProductQuantity)
        const NewProduct = {
            ProductName,
            ProductPrice, 
            ProductQuantity
        }
        // console.log(NewProduct)
        setProducts([...Products, NewProduct])
        e.target.name.value = ''
        e.target.price.value = ''
        e.target.quantity.value = ''
    }
    return (
        <div>
            <form onSubmit={HandleSubmit}>
                <input name='name' type="text" placeholder='Product Name'  />
                <br />
                <input type="text" name="price" placeholder='Product Price' id="" />
                <br />
                <input type="text" name="quantity" placeholder='Product Quantity' id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ProductForm;