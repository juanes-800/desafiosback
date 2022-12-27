const fs = require("fs");

class ProductManager {
  constructor(path) {
    this.path = path;
    this.products = this.readFile();
  }
  readFile() {
    const data = JSON.parse(fs.readFileSync(`./${this.path}`, "utf-8"));
    return data;
  }
  writeData(data) {
    const dataStrings = JSON.stringify(data);
    fs.writeFileSync(`./${this.path}`, dataStrings);
    return dataStrings;
  }

  addProduct(product) {
    if (this.products.find((item) => item.code === product.code)) {
      throw new Error("ya existe");
    } else if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbanail ||
      !product.code ||
      !product.stock
    ) {
      throw new Error("Los campos son  obligatorios");
    }
    let data = this.readFile();
    data.push(product);
    this.writeData(data);
  }
  getProduct() {
    let data = this.readFile();
    return data;
  }

  getProductByID(id) {
    let data = this.readFile();
    let save = data.find((element) => element.id === id);
    if (save) {
      console.log(save);
    } else {
      throw new Error("not found");
    }
  }

  deleteProduct(id) {
    let data = this.readFile();
    let products = data.find((item) => item.id === id);

    if (products) {
      let deleteProduct = data.filter((item) => item.id !== id);
      this.writeData(deleteProduct);
      console.log(deleteProduct);
    }
    console.log("No se encuentra producto  para eliminar con  ese id");
  }

  updateProduct(id, updatedProduct) {
    let products = this.readFile();

    let product = products.find((product) => product.id === id);

    if (!product) {
      return console.log("Error");
    }

    Object.assign(product, updatedProduct);

    this.writeData(products);
  }
}

class Product {
  static countProduct = 1;
  constructor(title, description, price, thumbanail, code, stock) {
    this.id = Product.countProduct++;
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbanail = thumbanail;
    this.code = code;
    this.stock = stock;
  }
}

let productList = new ProductManager("data.json");

let producto0 = new Product("Amalaki", "vitamina",20000,"https://cdn.shopify.com/s/files/1/0455/4224/4511/products/AMALAKI.jpg?v=1600114241",123, 10);

let producto1 = new Product("Te meishen limón", " te", 29000,"https://cdn.shopify.com/s/files/1/0455/4224/4511/products/Te-Meishen-tarro.jpg?v=1600114638", 124, 11);

let producto2 = new Product("Levadura de cerveza", "vitamina", 40000,"https://cdn.shopify.com/s/files/1/0455/4224/4511/products/LEVADURA-CERVEZA100.jpg?v=1600114457", 125, 12);

let producto3 = new Product("Echinacea", "vitamina", 60000, "https://cdn.shopify.com/s/files/1/0455/4224/4511/products/ECHINACEA.jpg?v=1600114354", 126, 13);

let producto4 = new Product("Biotin", "te", 61000, "https://cdn.shopify.com/s/files/1/0455/4224/4511/products/BIOTIN-COLLAGEN.jpg?v=1600114276", 127, 14);

let producto5 = new Product("Clorofila purrcell", "vitamina", 20850, "https://cdn.shopify.com/s/files/1/0455/4224/4511/products/A397.jpg?v=1622465157", 128, 15);

let producto6 = new Product(" Te Formad", "te", 18400, "https://cdn.shopify.com/s/files/1/0455/4224/4511/products/TE-FORMA-LIGHT.jpg?v=1600114639", 129, 16);

let producto7 = new Product("Vitacer", "vitamina", 70000, "https://cdn.shopify.com/s/files/1/0455/4224/4511/products/A796.png?v=1600114711", 130, 17);

let producto8 = new Product("Garcinia", "vitamina", 50000, "https://cdn.shopify.com/s/files/1/0455/4224/4511/products/GARCINIA.jpg?v=1600114395", 131, 18);

let producto9 = new Product("Te relaxnat", "te", 14800, "https://cdn.shopify.com/s/files/1/0455/4224/4511/products/TE-RELAXNAT.jpg?v=1600114639", 132, 19);


// 1

// productList.addProduct(producto0);
// productList.addProduct(producto1);
// productList.addProduct(producto2);
// productList.addProduct(producto3);
// productList.addProduct(producto4);
// productList.addProduct(producto5);
// productList.addProduct(producto6);
// productList.addProduct(producto7);
// productList.addProduct(producto8);
// productList.addProduct(producto9);


//2
// error ya existe el code
// persona1.addProduct(producto1);

// 3
// Mostrar productos
// console.log(productList.getProduct());

//4
// Buscar producto
// persona1.getProductByID(3)

//5
// Eliminar producto
// persona1.deleteProduct(3)

//6
// actualizar id
// persona1.updateProduct(1,{
//     id: 1,
//     title: 'cambiando',
//     description: ' rojo',
//     price: 20000,
//     thumbanail: 'img',
//     code: 124,
//     stock: 19456
// })
module.exports = {
  ProductManager: productList
}
