import {useState,useEffect,Fragment} from 'react'


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

      <h3>{title}</h3>

     <ul>
        { users && users.map((user, i) => 
      <li key={i}>               
           <p> NOMBRE: {user.Nombre} </p>
           <p> APELLIDO: {user.Apellido} </p>
           <p> CORREO: {user.Email} </p>
           <img src={user.urlAvatar} width= {150} alt={user.imagen} />
      </li>
        )}  
    </ul> 
           
      </Fragment> 
  

  )
 }


export default ListaUsuarios;