class ProductManager {
    constructor(){
        this.products = [];
    }

    addProduct = (code, title, description, price, thumbnail, stock) => {
        if (!code || !title || !description || !price || !thumbnail || !stock) {
            console.log("Faltan completar los argumentos!");
            return;
        }
        const productCode = this.products.find((product) => product.code === code);
        const product = {
            id: this.products.length + 1, 
            code, 
            title, 
            description,
            price,
            thumbnail,
            stock 
        };

        if(productCode){
            console.log('Este producto ya existe!');
            return;
        }else {
            this.products.push(product);
        }

    };
    
    getProducts = () => {
        console.log(this.products);
        return
    }

    getProductById = (id) => {
        const prodIndex = this.products.findIndex((product) => product.id === id); 

        if(prodIndex === -1){
            console.log('Producto no encontrado!');
            return;
        }else {
            console.log(this.products[prodIndex]);
            return;
        }
    };
}

const productManager = new ProductManager();

productManager.getProducts();

productManager.addProduct('abc123', 'producto prueba', 'Este es un product prueba', 200, 'sin imagen', 25);

productManager.getProducts();

productManager.addProduct('abc123', 'producto prueba', 'Este es un product prueba', 200, 'sin imagen', 25);
productManager.getProductById(1);