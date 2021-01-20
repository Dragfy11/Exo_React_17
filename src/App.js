import React, {useState} from 'react'
import './App.css';
import Bouton from './Components/Bouton'

function App() {
  const [nbr, setNbr] = useState(0);
  return (
    <div className="App">
      <h1>Exercice 17</h1>
      {nbr} <br/> <br/>
      <Bouton incr={(a) => setNbr(nbr+a)}/>
    </div>
  );
}

export default App;
