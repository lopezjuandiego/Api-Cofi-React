import TotalUsuarios from './TotalUsuarios';
import UltimoUsuario from './UltimoUsuario';
import ListaUsuarios from './ListaUsuarios';
import './App.css';

function App() {
  return (
    <section>

      <article>
    <h1>DASHBOARD COFI</h1>
     </article>

       <article>
        <TotalUsuarios title='TOTAL USUARIOS' />        
      </article>    

         <article>
        <UltimoUsuario title='ULTIMO USUARIO AGREGADO' />
      </article>   

      <article>
        <ListaUsuarios title='LISTA DE USUARIOS' />
      </article> 
    </section>
  );
}

export default App;
