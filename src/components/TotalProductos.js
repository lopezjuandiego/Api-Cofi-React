import {useState,useEffect,Fragment} from 'react';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import './TotalUsuarios.css'


function TotalProductos ({title}){

    const [products,setProducts] = useState(null);
   
    useEffect(() => {
        fetch('http://localhost:3050/api/products/')
        .then(res => res.json())
        .then(data => setProducts(data.meta.totalProducts))        
        console.log('inicio')
    },[])

    useEffect(() => {
        fetch('http://localhost:3050/api/products/')
        .then(res => res.json())
        .then(data => setProducts(data.meta.totalProducts))        
        console.log('actualizo')
    },[])

    return (
       
         <Fragment>

        <h3 className="titleTotal">{title}</h3>

        <article className="contentProduct">
        < Inventory2OutlinedIcon
            sx={{ fontSize: 120, color: ' #6f1d1b' }}
            
        />
        <p className="usersTotal"> {products} </p>
        </article>

        </Fragment> 
    

    )
 }


export default TotalProductos;