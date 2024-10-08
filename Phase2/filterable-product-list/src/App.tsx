import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import FilterSection from "./components/FilterSection";

interface Product {
  name: string;
  category: string;
  price: number;
}

const App: React.FC = () => {
  const products: Product[] = [
    { name: "Laptop", category: "Electronics", price: 999 },
    { name: "Smartphone", category: "Electronics", price: 699 },
    { name: "T-shirt", category: "Clothing", price: 19 },
    { name: "Jeans", category: "Clothing", price: 49 },
    { name: "Headphones", category: "Electronics", price: 199 },
    { name: "Jacket", category: "Clothing", price: 89 },
  ];

  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filterProducts = (category: string) => {
    setActiveCategory(category);
  };

  const filteredProducts: Product[] =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="container">
      <h1>Product List</h1>
      <FilterSection
        activeCategory={activeCategory}
        onFilterChange={filterProducts}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
