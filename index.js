

class ProductManager{
  constructor(nombre){
    this.nombre = nombre;
    this.products = [];
  }

  addProduct(producto){
    if(this.products.find(element => element.code === producto.code)){
      throw new Error('ya existe')
    }
    this.products.push(producto)
  }
    

  getProducts(){
    return this.products
  }
  getProductByID(id){
    if(this.products.find(element => element.id === id)){
      console.log(this.products[id])
    } else{
      throw new Error('not found')

    }
  }


  
}
class Product{
  static  countProduct = 0;
  constructor(title, description, price, thumbanail, code, stock){
    this.id = Product.countProduct++
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbanail = thumbanail;
    this.code = code;
    this.stock = stock
  }
 
}

let persona1 = new ProductManager('juan');

let producto0 = new Product('Pantalon', 'azul', 50000, 'img', 123, 10);
let producto1 = new Product('camisa', ' negra', 20000, 'img', 124, 19);
let producto2 = new Product('medias', 'blanca', 50000, 'img', 12, 8);
let producto3 = new Product('gorra', 'verde', 25000, 'img',12, 6 )


persona1.addProduct(producto0);
persona1.addProduct(producto1);
persona1.addProduct(producto2);
// error ya existe el code 
// persona1.addProduct(producto3);        

// Mostrar productos
// console.log(persona1.getProducts());

// Buscar producto
// persona1.getProductByID()














