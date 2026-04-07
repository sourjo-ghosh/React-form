import React from "react";

const ProductTable = ({ Products }) => {
  console.log(Products);
  return (
    <div style={{ border: "1px solid red", padding: "10px" }}>
      <h1>Total Products {Products.length}</h1>
      <div>
        <div>
          <table
            style={{ width: "100%", borderCollapse: "collapse" }}
            border="1"
          >
            <thead>
              <tr>
                <th>No.</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Quantity</th>
              </tr>
            </thead>
            <tbody>
              {Products.map((product, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product.ProductName}</td>
                  <td>{product.ProductPrice}</td>
                  <td>{product.ProductQuantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
