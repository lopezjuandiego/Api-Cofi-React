import {useState,useEffect,Fragment} from 'react'
import './ListaUsuarios.css';

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

      <h3 className='titleLista'>{title}</h3>

     <ul className='containUl'>
        { products && products.map((product, i) => 
      <li className='containLi2' key={i}>  
          <article>           
          <p className='titleP'> ORIGEN: {product.Origen.country} </p>
             <p className='titleP'> TIPO DE GRANO: {product.Grano.tipoDeGrano} </p> 
             <p className='titleP'> CANTIDAD: {product.Cantidad.Cantidad + " gramos"} </p> 
              <p className='titleP'> PRECIO: {product.Precio + " pesos"} </p>
             <p className='titleP'> OFERTA: {product.Oferta ? "Producto en oferta" : "No está de oferta"} </p> 
             </article>  
            <img className='containImg'  src={product.urlImagen}  alt={product.imagen} /> 
      </li>
        )}  
    </ul> 
           
      </Fragment> 
  

  )
 }


export default ListaUsuarios;