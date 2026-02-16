import './App.css'
import { User } from './components/User'

export const App = () => {
  return (
    <>
      <div className='circle'>  </div>
      <p style={{ fontSize: "2rem", color: "red", textDecoration: "underline" }}>Hola React  </p>
      <p>Hola JavaScript </p>
      <button>Enviar</button>
      <h1>Tarjeta de usuario</h1>

      <User image="../cuervos" nombre="" estados="">  </User>
      <User image="../dragones" nombre="" estados="">  </User>
      <User image="../user" nombre="" estados="">  </User>
    </>
  )
}
