// class ProductManager {
  
//     static idContador = 0;
//     constructor( title, price, description, thumbail, code, stock){
//       this.products = [];
//       this.id = ProductManager.idContador++;
//       this.title = title;  
//       this.price = price;
//       this.description = description;
//       this.thumbail = thumbail;
//       this.code = code;
//       this.stock = stock;
//     }
//     addProducts(product){
      
//       }
//     }
    
//     getProducts(){
//       let getProduct = '';
//       for(let producto of this.products){
//         getProducts += producto + ' ';
//       }
//        console.log(getProduct); 
//     }
  
//     getProductById(){
  
//     }
//     toString(){
//           return `id: ${this.id}, title: ${this.title}, price:${this.price},description: ${this.description} ,thumbail:${this.thumbail}, code: ${this.code}, stock: ${this.stock}`
//       }
  
  
//   }
  
//   let producto1 = new ProductManager('pantalon', 2000,'rojo','123sidsdsd', 23, 13);
//   let producto2 = new ProductManager('pantalon', 2000,'rojo','123sidsdsd', 23, 13);
//   console.log(producto1);
//   producto1.addProducts(producto1);
//   console.log(producto1)
//   console.log(producto2)
//   producto1.getProducts()


return  this.products.forEach( (item) => {
    if(!item.code === producto.code){
       this.products.push(producto); 
    }else{
      console.log('no se puede agregar producto')
    }
    
  });