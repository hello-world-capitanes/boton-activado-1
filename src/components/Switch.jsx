// - que haya otro boton que cambie el color de fondo de la pagina
// - q haya 2 input text uno para activado y otro para desactivado
// - 2 input text uno para background on y otro para background off
// - crear un pie q ponga babel

import { useState } from 'react';
import './Switch.css';

const Switch = () => {
  const [state, setState] = useState(false);

  const toggleState = () => setState(!state);

  return (
    <div className={`switch ${state ? 'on' : 'off'}`}>
      <p>{state ? 'On' : 'Off'}</p>
      <button onClick={() => toggleState()}>Change state</button>
    </div>
  );
};

export default Switch;
