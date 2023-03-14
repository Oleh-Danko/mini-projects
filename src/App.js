import { useState } from 'react';
import './index.scss';

function App() {
  const [counter, setCounter] = useState(0)
  
  return (
    <div className="App">
      <div>
        <h2>Лічильник:</h2>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter - 1)} className="minus">- Мінус</button>
        <button onClick={() => setCounter(counter + 1)} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
