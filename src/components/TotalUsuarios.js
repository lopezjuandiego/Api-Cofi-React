import {useState,useEffect,Fragment} from 'react';
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';
import './TotalUsuarios.css'


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
       
         <Fragment >
           
            <h3 className="titleTotal">{title}</h3>  

            <article className="contentProduct">
             <PersonPinCircleOutlinedIcon 
             sx={{ fontSize: 120,color: ' #6f1d1b' }}
             />
            <p className="usersTotal"> {users} </p>
            </article>

        </Fragment> 
    

    )
 }


export default TotalUsuarios;