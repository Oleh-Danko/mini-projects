import { useState } from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - це ... ?',
    variants: ['бібліотека', 'фреймворк', 'програма'],
    correct: 0,
  },
  {
    title: 'Компонент - це ... ',
    variants: ['програма', 'частина програми або сторінки', 'функція'],
    correct: 1,
  },
  {
    title: 'Що таке JSX?',
    variants: [
      'Це простий HTML',
      'Це функція',
      'Це той же HTML, фле з можливістю виконувати JS-код',
    ],
    correct: 2,
  },
];

function Result({res}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>{res <= 0 ? `Ви відгадали ${res} відповідей з ${questions.length}` : res === 1 ? `Ви відгадали ${res} відповідь з ${questions.length}` : `Ви відгадали ${res} відповіді з ${questions.length}`}</h2>
      <a href="/">
        <button>Спробувати ще</button>
      </a>
    </div>
  );
}

function Game({step, setStep, onClickVariant, question}) {
  const percentage = (step / questions.length * 100).toFixed()

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((element, i) => <li key={i} onClick={() => onClickVariant(i)}>element</li>)}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0)
  const [res, setRes] = useState(0)
  const question = questions[step]

  const onClickVariant = (index) => {
    if(index === question.correct) setRes(res + 1)
    setStep(step + 1)
  }

  return (
    <div className="App">
      {step !== questions.length ? <Game setStep={setStep} question={question} step={step} onClickVariant={onClickVariant} /> : <Result res={res} setStep={setStep}/>}
    </div>
  );
}

export default App;
