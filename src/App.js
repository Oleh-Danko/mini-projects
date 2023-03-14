import {useState} from 'react';
import './index.scss';

function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <button onClick={() => (setShow(true))} className="open-modal-btn">✨ Открыть окно</button>
      <div 
        onClick={(e) => (setShow(e.target === document.querySelector('.overlay') ? false : true))} 
        className={`overlay animated ${show ? 'show' : ''}`}>
        <div className="modal">
          <svg height="200" viewBox="0 0 200 200" width="200">
            <title />
            <path 
              onClick={() => (setShow(false))} 
              d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img src="https://media0.giphy.com/media/kigfYxdEa5s1ziA2h1/giphy.gif?cid=6c09b9524a09742fb56861dd2785f143e7f2953b9b636a12&rid=giphy.gif&ct=g" />
        </div>
      </div>
    </div>
  );
}

export default App;
