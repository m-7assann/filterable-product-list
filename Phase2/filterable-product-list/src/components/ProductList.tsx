import React from 'react';
import './ProductList.css';

interface Product {
  name: string;
  category: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="product-item">
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
