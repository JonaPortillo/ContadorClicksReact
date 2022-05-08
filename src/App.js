import './App.css';
import Boton from './components/Botón';
import Contador from './components/Contador';
import logoFCC from './images/logo.jpg'

function App() {

  const manejarClick = () => {
    console.log("Click")
  }

  const reiniciarContador = () => {
    console.log("Reiniciar")
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className="freecodecamp-logo"
          src={logoFCC}
          alt="Logo freeCodeCamp" />
      </div>
      <div className='contenedor-principal'>
        <Contador
          numClicks='5'
        />
        <Boton
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick} />
        <Boton
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
