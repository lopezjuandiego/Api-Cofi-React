import {useState,useEffect,Fragment} from 'react'


function TotalUsuarios ({title}){

    const [users,setUsers] = useState(null);
   
    useEffect(() => {
        fetch('http://localhost:3050/api/users/')
        .then(res => res.json())
        .then(data => setUsers(data.meta.totalUsers))        
        console.log('inicio')
    },[])

    useEffect(() => {
        fetch('http://localhost:3050/api/users/')
        .then(res => res.json())
        .then(data => setUsers(data.meta.totalUsers))        
        console.log('actualizo')
    },[])

    return (
       
         <Fragment>

        <h3>{title}</h3>
       
        <p> {users} </p>
      
        </Fragment> 
    

    )
 }


export default TotalUsuarios;