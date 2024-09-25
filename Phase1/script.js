
const products = [
    { name: 'Laptop', category: 'Electronics', price: 999 },
    { name: 'Smartphone', category: 'Electronics', price: 699 },
    { name: 'T-shirt', category: 'Clothing', price: 19 },
    { name: 'Jeans', category: 'Clothing', price: 49 },
    { name: 'Headphones', category: 'Electronics', price: 199 },
    { name: 'Jacket', category: 'Clothing', price: 89 }
];

function displayProducts(productArray) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear existing products

    productArray.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
        `;

        productList.appendChild(productItem);
    });
}


function filterProducts(category) {

    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(button => button.classList.remove('active'));
    
    document.querySelector(`button[onclick="filterProducts('${category}')"]`).classList.add('active');

    if (category === 'All') {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

filterProducts('All');
