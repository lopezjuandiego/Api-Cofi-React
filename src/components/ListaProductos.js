import {useState,useEffect,Fragment} from 'react'


function ListaUsuarios ({title}){
    

  const [products,setProducts] = useState([]);
   
  useEffect(() => {
      fetch('http://localhost:3050/api/products/')
      .then(res => res.json())
      .then(data => setProducts(data.data))        
      console.log('inicio')
  },[])

  useEffect(() => {
      fetch('http://localhost:3050/api/products/')
      .then(res => res.json())
      .then(data => setProducts(data.data))        
      console.log('actualizo')
  },[])

  return (
     
       <Fragment>

      <h3>{title}</h3>

     <ul>
        { products && products.map((product, i) => 
      <li key={i}>               
          <p> ORIGEN: {product.Origen.country} </p>
             <p> TIPO DE GRANO: {product.Grano.tipoDeGrano} </p> 
             <p> CANTIDAD: {product.Cantidad.Cantidad + " gramos"} </p> 
              <p> PRECIO: {product.Precio + " pesos"} </p>
             <p> OFERTA: {product.Oferta ? "Producto en oferta" : "No está de oferta"} </p> 
            <img src={product.urlImagen} width= {150} alt={product.imagen} /> 
      </li>
        )}  
    </ul> 
           
      </Fragment> 
  

  )
 }


export default ListaUsuarios;