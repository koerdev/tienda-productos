class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    };
};

class UI {
    addProduct() {

    };

    deleteProduct() {

    };

    showMessages() {

    };
};

// Eventos del DOM
document.getElementById('product-form').addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const price = document.getElementById('price').value.trim();
    const year = document.getElementById('year').value.trim();

    console.log(name, price, year);
});