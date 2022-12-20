const fs = require('fs')

class ProductManager{
  constructor(){

    this.products = [];
  }

  addProduct(product){
    if(this.products.find(element => element.code === product.code)){
      throw new Error('ya existe')
    } else if(!product.title || !product.description|| !product.price || !product.thumbanail || !product.code || !product.stock){
      throw new Error('Los campos son obligatorios')
    }
    this.products.push(product)
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
  
  deleteProduct(id){
    if(this.products.find( element => element.id === id)){
      console.log( delete this.products[id]); 
    }
    console.log('No se encuentra producto  para eliminar con  ese id');
  }

  updateProduct(id, obj){
    if(this.products.find(item => item.id === obj.id)){
      const guardar = this.products[id]
      for(let key in obj){
        guardar[key] = obj[key];
        
      }
        console.log(guardar)
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

let persona1 = new ProductManager();
let producto0 = new Product('Pantalon', 'azul', 50000, 'img', 123, 10);
let producto1 = new Product('camisa', ' negra', 20000, 'img', 124, 19);
let producto2 = new Product('medias', 'blanca', 50000, 'img', 12, 8);
let producto3 = new Product('zapato', 'blancas', 50000, 'img', 1,3);


persona1.addProduct(producto0);
persona1.addProduct(producto1);
persona1.addProduct(producto2);
persona1.addProduct(producto3);


// error ya existe el code 
// persona1.addProduct(producto3);        

// Mostrar productos
// console.log(persona1.getProducts());

// Buscar producto
// persona1.getProductByID(1)

// Eliminar producto 
// persona1.deleteProduct(7)

// actualizar id 
persona1.updateProduct(2,
  {id: 2,
  title: 'actualizes',
  description: 'blancaghh',
  }
  

)

  
  