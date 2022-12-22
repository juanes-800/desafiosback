const fs = require('fs')

class ProductManager{
  constructor(path){
    this.path = path;
    this.products = this.readFile();
  }
  readFile(){
    const data = JSON.parse(fs.readFileSync(`./${this.path}`,'utf-8'));
    return data;
  }
  writeData(data){
    console.log('entra');
    const dataStrings = JSON.stringify(data);
    fs.writeFileSync(`./${this.path}`,dataStrings)
    return dataStrings;

  }

  addProduct(product){
    
    if(this.products.find(element => element.code === product.code)){
      console.log('entra al error');
      throw new Error('ya existe')
    } else if(!product.title || !product.description|| !product.price || !product.thumbanail || !product.code || !product.stock){
      throw new Error('Los campos son  obligatorios')
    }
    let data = this.readFile()
    data.push(product);
    this.writeData(data);
  }
  getProduct(){
    let data = this.readFile();
    return data;
  }
  
  getProductByID(id){
    let data = this.readFile()
    let save = data.find(element => element.id === id)
    if(save){
      console.log('entra al id');
      console.log(save);
     
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
      guardar.push(obj);
      this.writeData(guardar);

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

let persona1 = new ProductManager('data.json');
let producto0 = new Product('Pantalon', 'azul', 50000, 'img', 123, 10);
let producto1 = new Product('camisa', ' negra', 20000, 'img', 124, 19);
let producto2 = new Product('medias', 'blanca', 50000, 'img', 12, 8);
let producto3 = new Product('zapato', 'blancas', 50000, 'img', 1,3);


persona1.addProduct(producto0);



// error ya existe el code 
// persona1.addProduct(producto1);        

// Mostrar productos
// console.log(persona1.getProduct());

// Buscar producto
persona1.getProductByID(0)

// Eliminar producto 
// persona1.deleteProduct(7)

// actualizar id 
// persona1.updateProduct(2,
//   {id: 2,
//   title: 'actualizes',
//   description: 'blancaghh',
//   }
  

// )

  
  