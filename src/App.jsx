import Switch from './components/Switch';
import Footer from './components/Footer/footer';
import {useState} from 'react'

const App = () => {
  const [isBackgroundPink, setIsBackgroundPink] = useState('true');/* pone predeterminado el fondo rosa= true*/

  const toggleBackgroundColor= () => { /* cambia el estado*/
    setIsBackgroundPink(!isBackgroundPink); /* cambia al valor contrario*/

  }

  const appStyle = {
    backgroundColor: isBackgroundPink ? 'pink' : 'white', 
    minHeight: '100vh', 
    transition: 'background-color 0.3s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
   
    <div style = {appStyle}>
        <Switch />
        <button onClick = {toggleBackgroundColor}> 
        {isBackgroundPink ? 'Restaurar color' : 'Cambiar color'}
        </button>
        <div>
      <Footer />
      </div>
    </div>
 
  )
};





export default App;
