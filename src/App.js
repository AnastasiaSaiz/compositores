import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Compositores from "./compositores";
import EliminarCompositor from "./eliminarCompositor";
import { BrowserRouter, Route} from "react-router-dom";
import Cabecera from "./cabecera";


function App() {
  const [text, setText] = useState("");
  /*const [parrafo, setParrafo] = useState("");*/
  const [compositores, setCompositores] = useState(
    /* [
       'Wolfgang Amadeus Mozart',
       'Ludwig van Beethoven',
       'Johann Sebastian Bach'
     ]*/

    [
      {
        nombre: 'Wolfgang Amadeus Mozart',
        fecha: 1756,
        canciones: ['Symphonie Nr 40', 'Don Giovanni']
      },
      {
        nombre: 'Ludwig van Beethoven',
        fecha: 1770,
        canciones: ['Symphonie No.5', 'Piano Sonata No.32']
      },
      {
        nombre: 'Johann Sebastian Bach',
        fecha: 1685,
        canciones: ['Vivace', 'Largo ma non tanto']
      }
    ]


  );

  const manageChange = (event) => {
    setText(event.target.value);
  }

  /* const mostrarParrafo = () => {
     setParrafo(text);
   } */
  const anyadirCompositor = () => {
    const nuevoArray = [...compositores, { nombre: text }]
    setCompositores(nuevoArray);
    setText("");
  }

  /* const compositoresHTML = compositores.map(compositor => {
     return <li>{compositor.nombre}</li>
   })*/

  const borrarCompositor = (nombre) => {
    const nuevoArray = compositores.filter(compositor => compositor.nombre !== nombre)
    setCompositores(nuevoArray);
  }

  /* const borrar = () => {
     borrarCompositor(text);
   }*/
  return (
    <BrowserRouter>
    <Cabecera/>
      <Route exact path="/">
        {/* <ul>{compositoresHTML}</ul>*/}
        <Compositores compositores={compositores} />
        <input type="text" value={text} onChange={manageChange} />
        {/*<p>{parrafo}</p> */}
        <button onClick={anyadirCompositor}>Añadir</button>
        {/*<input type="text" value={text} onChange={manageChange} />*/}
        {/*<button onClick={borrarCompositor}>Borrar</button>*/}
        {/*<button onClick={borrar}>Borrar</button>*/}
      </Route>
      <Route exact path="/eliminar">
        <EliminarCompositor borrarCompositor={borrarCompositor} />
      </Route>
    </BrowserRouter >
  );
}

export default App;
