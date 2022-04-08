import {useState,useEffect,Fragment} from 'react';
import './UltimoUsuarios.css';


function UltimoUsuario ({title}){
  
  const [users,setUsers] = useState([]);
   
    useEffect(() => {
        fetch('http://localhost:3050/api/users/last/')
        .then(res => res.json())
        .then(data => setUsers(data.data))        
        console.log('inicio')
    },[])

    useEffect(() => {
        fetch('http://localhost:3050/api/users/last/')
        .then(res => res.json())
        .then(data => setUsers(data.data))        
        console.log('actualizo')
    },[])

    return (
       
         <Fragment>

        <h3 className='titleUltimo'>{title}</h3>

       <ul >
        <li className='containLi'>   
             <article >         
             <p className='containP'> NOMBRE: {users.Nombre}</p>             
             <p className='containP'> APELLIDO: {users.Apellido} </p>
             <p className='containP'> CORREO: {users.Email} </p>
             </article>   
             <img className='containImag' src={users.urlAvatar}  alt={users.imagen} />
        </li>  
      </ul> 
             
        </Fragment> 
    

    )
 }

       


export default UltimoUsuario;