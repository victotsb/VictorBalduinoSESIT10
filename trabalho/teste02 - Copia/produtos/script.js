function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    getTotalPrice() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }

    getProductCount() {
        return this.products.length;
    }

    getFormattedTotalPrice() {
        return `R$ ${this.getTotalPrice().toFixed(2)}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const cart = new ShoppingCart();
    const cartItemsContainer = document.getElementById('cart-items');

    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
        storedCartItems.forEach(item => {
            cart.addProduct(new Product(item.name, item.price));
        });
        updateCart();
    }

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        cart.products.forEach(product => {
            const itemElement = document.createElement('div');
            itemElement.textContent = `${product.name} - R$ ${product.price.toFixed(2)}`;
            cartItemsContainer.appendChild(itemElement);
        });
        document.getElementById('cart-total').textContent = `Total: ${cart.getFormattedTotalPrice()}`;

        localStorage.setItem('cartItems', JSON.stringify(cart.products));
    }

    const addToCartButtons = document.querySelectorAll('.btn-primary');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const price = parseFloat(button.dataset.price);
            const productName = button.dataset.name;
            const product = new Product(productName, price);
            cart.addProduct(product);
            updateCart();

            const cartItemElement = document.createElement('div');
            cartItemElement.textContent = `${productName} - R$ ${price.toFixed(2)}`;
            cartItemsContainer.appendChild(cartItemElement);
        });
    });
});