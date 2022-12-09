class ProductManager{
  constructor(nombre){
    this.nombre = nombre;
    this.products = [];
  }
  addProduct(producto){
    this.products.forEach( (item) => {
      if(!item.code === producto.code){
         this.products.push(producto); 
      }else{
        console.log('no se puede agregar producto')
      }
      
    });
  }
  
}
class Product{
  static  countProduct = 1;
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
let producto = new Product('Pantalon', 'rojo', 50000, 'img', 123, 20);
let persona1 = new ProductManager('juan');


persona1.addProduct(producto); 








