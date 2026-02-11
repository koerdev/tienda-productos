class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    };
};

class UI {
    addProduct(product) {
        const productList = document.getElementById('product-table-body');
        const element = document.createElement("tr");
        element.classList.add("text-center");
        element.innerHTML = `
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.year}</td>
            <td>
                <button class="btn btn-danger btn-sm" name="delete">X</button>
            </td>
        `;
        productList.appendChild(element);
    };

    resetForm() {
        document.getElementById('product-form').reset();
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

    const product = new Product(name, price, year);
    const ui = new UI();

    ui.addProduct(product);
    ui.resetForm();
});