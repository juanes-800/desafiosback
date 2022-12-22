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
    let saveProduct = this.products.find(
      (element) => element.code === product.code
    );
    if (saveProduct) {
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

  updateProduct(id, obj) {
    
    let data = this.readFile();
    let saveData = data.find((item) => item.id === id);
    if (saveData) { 
      let guardar = saveData;
      for (let key in obj) {
        guardar[key] = obj[key];
        data.push(guardar);
        this.writeData(data);
      }
      console.log(guardar);
    } else {
      console.log("no se puede modificar");
    }
  }
}

class Product {
  static countProduct = 0;
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

let persona1 = new ProductManager("data.json");
let producto0 = new Product("Pantalon", "azul", 50000, "img", 123, 10);
let producto1 = new Product("camisa", " negra", 20000, "img", 124, 19);
let producto2 = new Product("medias", "blanca", 50000, "img", 12, 8);
let producto3 = new Product("zapato", "blancas", 50000, "img", 1, 3);

// 1
// persona1.addProduct(producto1);
// persona1.addProduct(producto2);
// persona1.addProduct(producto3);

//2
// error ya existe el code
// persona1.addProduct(producto1);

// 3
// Mostrar productos
// console.log(persona1.getProduct());

//4
// Buscar producto
// persona1.getProductByID(3)

//5
// Eliminar producto
// persona1.deleteProduct(3)

//6
// actualizar id
// persona1.updateProduct(1,
//   {
//   title: 'sombrero',
//   description: 'rojo',
//   })
