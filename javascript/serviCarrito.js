
console.log('======================================================');
console.log('=======Bienvenido al serviCompras/serviCarrito========');
console.log('======================================================');


//Obtenemos los datos del producto con la funcion



    //cree variables globales:

    let = nombreProducto; 
    let = marcaProducto; 
    let = stockProducto ; 
    let = productoForm; 
    let listaProductos = []; //array

    //cree una funcion  (les asigno una informacion a las variables)
    //Obtengo los datos del producto:
    const dameDatos = () => {
        nombreProducto = document.getElementById('nombreProducto').value;
        marcaProducto = document.getElementById('marcaProducto').value;
        stockProducto = document.getElementById('stockProducto').value;
        

    }
    
    //Creamos una funcion para cargar los productos en un array:
    
    //Imprimo el objeto
    const serviCarrito = () => {
    //Invocamos a la funcion que obtiene los datos
        
        dameDatos();

        //Creamos un objeto para guardar los datos del producto
        
        let producto = {       
            nombreProducto,
            marcaProducto,
            stockProducto,
        }

        console.log(producto);    //imprimime el producto
        console.log('======================================================');

        //Agregamos el objeto al array de productos
        listaProductos.push(producto);

        localStorage.setItem ('Productos', JSON.stringify(listaProductos));

        console.log('======================================================');

        console.log(listaProductos);  //imprimime lista productos para ver que tiene

        console.log('======================================================');

        
        
        console.log ('El producto dado de alta es ${nombreProducto} y su marca es ${marcaProducto} y su stock es de ${stock.Producto} cajas');
        //Borramos los datos escritos por el usuario
        
        productoForm.reset(); 
        
        console.log(producto); 


    }







//Arrow:

     //let nombreProducto = document.getElementById('nombreProducto').value;
        //let marcaProducto = document.getElementById('marcaProducto').value;
        //let stockProducto = document.getElementById('stockProducto').value; 

        //let productoForm = document.getElementById('productoForm');

        //console.log ('El producto dado de alta es ${nombreProducto} y su marca es ${marcaProducto} y su stock es de ${stock.Producto} cajas');
        
        //productoForm.reset();
    
    //console.log('======================================================');
    
    //listProductos.push(produto);
    //console.log(listaProductos)
    //console.log('======================================================');
    


    

    



