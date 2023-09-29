// - que haya otro boton que cambie el color de fondo de la pagina
// - q haya 2 input text uno para activado y otro para desactivado
// - 2 input text uno para background on y otro para background off
// - crear un pie q ponga babel

import { useState } from 'react';
import Input from './Input';
import './Switch.css';

const Switch = () => {
  const [state, setState] = useState(false);
  const [active, setActive] = useState ("Activado");
  const [deactive, setDeactive] = useState ("Desactivado");

  const [loginText, setLoginText] = useState('');
  const [logoutText, setLogoutText] = useState('');

  const toggleState = () => setState(!state);

  return (
    <div className={`switch ${state ? 'on' : 'off'}`}>
      <label> 
        <p>Texto activado </p>  
        <input type= "text" name="Texto activado" value={active} onChange={event => {
          setActive (event.target.value);
        }} />
      </label>
      <label>
      <p>Texto desactivado </p>  
        <input type= "text" name="Texto desactivado" value={deactive} onChange={event => {
          setDeactive (event.target.value);
        }} />
    </label>
      <p>{state ? active : deactive}</p>
      <button onClick={() => toggleState()}>{state ? logoutText : loginText}</button>
      <Input text="Texto iniciar sesión" logText={loginText} setLogText={setLoginText} />
      <Input text="Texto cerrar sesión" logText={logoutText} setLogText={setLogoutText} />
    </div>
  );
};

export default Switch;
