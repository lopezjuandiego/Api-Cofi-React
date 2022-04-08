import { useState, useEffect, Fragment } from 'react';
import './UltimoUsuarios.css';

function UltimoProducto({ title }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3050/api/products/last/')
            .then(res => res.json())
            .then(data => setProducts(data.data))
        console.log('inicio')
    }, [])

    useEffect(() => {
        fetch('http://localhost:3050/api/products/last/')
            .then(res => res.json())
            .then(data => setProducts(data.data))
        console.log('actualizo')
    }, [])

    return (
        <Fragment>
            <h3 className='titleUltimo'>{title}</h3>
            <ul >
                <li className='containLi'>
                    <article>
                     <p className='containP'> ORIGEN:{ products.Origen } </p>
                     <p className='containP'> TIPO DE GRANO: {products.Grano} </p> 
                    <p className='containP'> CANTIDAD: {products.Cantidad + " gramos"} </p>
                    <p className='containP'> PRECIO: {products.Precio + " pesos"} </p>   
                    <p className='containP'> OFERTA: {products.Oferta ? "Producto en oferta" : "No está de oferta"} </p>
                    </article>
                    <img src={products.urlImagen}  alt={products.imagen} />
                </li>
            </ul>

        </Fragment>
    )
}

export default UltimoProducto;