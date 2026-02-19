import './App.css'
import { User } from './components/User'
import { User1 } from './components/User1'
import { Usser2 } from './components/Usser2'

export const App = () => {
  return (
    <>
    <div className='banner'>
      <User1/>
    </div>

    <div className='texto'>
      <Usser2/>
    </div>

    <div className='tarjetas'>
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
    </div>
    </>
  )
}
