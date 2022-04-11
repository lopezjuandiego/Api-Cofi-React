import TotalUsuarios from './TotalUsuarios';
import UltimoUsuario from './UltimoUsuario';
import ListaUsuarios from './ListaUsuarios';
import ListaProductos from './ListaProductos';
import TotalProductos from './TotalProductos';
import UltimoProducto from './UltimoProducto';
import './App.css';

function App() {
  return (
    <>  
      <article className="contentTitle">
    <h1>DASHBOARD COFI </h1>
     </article>

        <section className ="contain">

        <section className ="containUser">
       <article className="containTotal">
        <TotalUsuarios title='TOTAL USUARIOS' />        
      </article>    

         <article className="containUltimo">
        <UltimoUsuario title='ÚLTIMO USUARIO AGREGADO' />
      </article>   

      <article className="containListado">
        <ListaUsuarios title='LISTA DE USUARIOS' />
      </article> 
      </section>

      <section className="containProduct"> 
      <article className="containTotal">
        <TotalProductos title='TOTAL PRODUCTOS' />        
      </article>    

         <article className="containUltimo">
        <UltimoProducto title='ÚLTIMO PRODUCTO AGREGADO' />
      </article>   

      <article className="containListado">
        <ListaProductos title='LISTA DE PRODUCTOS' />
      </article> 
      </section>

    </section>
    </> 
  );
}

export default App;
