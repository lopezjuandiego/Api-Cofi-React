import {useState,useEffect,Fragment} from 'react';
import './ListaUsuarios.css';

function ListaUsuarios ({title}){
    

  const [users,setUsers] = useState([]);
   
  useEffect(() => {
      fetch('http://localhost:3050/api/users/')
      .then(res => res.json())
      .then(data => setUsers(data.data))        
      console.log('inicio')
  },[])

  useEffect(() => {
      fetch('http://localhost:3050/api/users/')
      .then(res => res.json())
      .then(data => setUsers(data.data))        
      console.log('actualizo')
  },[])

  return (
     
       <Fragment>

      <h3 className='titleLista'>{title}</h3>

     <ul className='containUl'>
        { users && users.map((user, i) => 
      <li className='containLi2'  key={i}> 
           <article>            
           <p className='titleP'> NOMBRE: {user.Nombre} </p>
           <p className='titleP'> APELLIDO: {user.Apellido} </p>
           <p className='titleP'> CORREO: {user.Email} </p>
           </article>  
           <img  className='containImg'  src={user.urlAvatar}  alt={user.imagen} />
      </li>
        )}  
    </ul> 
           
      </Fragment> 
  

  )
 }


export default ListaUsuarios;