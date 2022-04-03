import {useState,useEffect,Fragment} from 'react'


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

        <h3>{title}</h3>

       <ul>
        <li>               
             <p> NOMBRE: {users.Nombre} </p>
             <p> APELLIDO: {users.Apellido} </p>
             <p> CORREO: {users.Email} </p>
             <img src={users.urlAvatar} width= {150} alt={users.imagen} />
        </li>  
      </ul> 
             
        </Fragment> 
    

    )
 }

       


export default UltimoUsuario;