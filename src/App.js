import {useState, useEffect} from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
  const [fromCurrency, setFromCurrency] = useState('UAH')
  const [toCurrency, setToCurrency] = useState('USD')
  const [rates, setRates] = useState([])
  const [fromValue, setFromValue] = useState(0)
  const [toValue, setToValue] = useState(0)

  useEffect(() => {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .then(res => res.json())
      .then(json => setRates([...json]))
      .catch(err => console.Error(err))
  }, [])

  const onChangeFromValue = (value) => {
    const fromRate = fromCurrency === 'UAH' ? 1 : rates.filter(el => el.cc === fromCurrency)[0].rate
    const toRate = toCurrency === 'UAH' ? 1 : rates.filter(el => el.cc === toCurrency)[0].rate
    const result = ((value / toRate) * fromRate).toFixed(2)

    setToValue(result)
    setFromValue(value)
  }

  const onChangeToValue = (value) => {
    const fromRate = fromCurrency === 'UAH' ? 1 : rates.filter(el => el.cc === fromCurrency)[0].rate
    const toRate = toCurrency === 'UAH' ? 1 : rates.filter(el => el.cc === toCurrency)[0].rate
    const result = ((value / fromRate)* toRate).toFixed(2)

    setToValue(value)
    setFromValue(result)
  }

  const onChangeFromCurrency = (value) => {
    setFromCurrency(value)
    onChangeFromValue(fromValue)
  }
  
  const onChangeToCurrency = (value) => {
    setToCurrency(value)
    // onChangeToValue(toValue)
    onChangeFromValue(fromValue)
  }

  return (
    <div className="App">
      <Block 
        onChangeValue={onChangeFromValue} 
        value={fromValue} currency={fromCurrency} 
        onChangeCurrency={onChangeFromCurrency} />
      <Block 
        onChangeValue={onChangeToValue} 
        value={toValue} currency={toCurrency} 
        onChangeCurrency={onChangeToCurrency} />
    </div>
  );
}

export default App;
