console.log("script loaded");

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
var arrayOfProducts = [
    { id: 1, name: 'book', cost: 5.45, quantity: 5, shortDescription: 'Short description about book', fullDescription: 'Full description about book' },
    { id: 2, name: 'pan', cost: 7.31, quantity: 2, shortDescription: 'Short description about pan', fullDescription: 'Full description about pan' },
    { id: 3, name: 'cup', cost: 9.37, quantity: 4, shortDescription: 'Short description about cup', fullDescription: 'Full description about cup' },
]


const product1 = new Product(
    "rice",
    "basmati",
    "chicken",
    "rajma",
    "drinks",
    "mashroom"
)

class ShoppingCart {
    constructor(name) {
        this.products = [];
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.manufacturer = manufacturer;
    }

    addProduct(product) {
        // Implement functionality here
        this.jobs.push(product);
    }

    removeProduct(product) {
        // Implement functionality here
        this.product.splice(index, 1);
    }

    searchProduct(productName) {
        // Implement functionality here

    }

    getTotal() {
        // Implement functionality here
        (itemPrice * quantity)
    }

    renderProducts() {
        // Implement functionality here
        return this;
    }

    getUser() {
        // Implement functionality here
    }
}

const shoppingCart = new ShoppingCart("pizza");
shoppingCart.addProduct(product1);
const flatscreen = new Product('flat-screen', 5000);
shoppingCart.addProduct(flatscreen);
shoppingCart.addItem(arrayOfProducts[0]);
shoppingCart.addItem(arrayOfProducts[0]);