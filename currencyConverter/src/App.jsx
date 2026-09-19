import { useState } from 'react'
import { InputBox } from './components'
import useCurencyInfo, { useCurrencyInfo } from './hooks/useCurrencyInfo'

import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("inr")
  const [to, setTo] = useState("usd")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurencyInfo(from);

  const options = object.keys(currencyInfo)

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
     setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
    <h1 className='bg-orange-300 text-3xl text-center p-3'>Currency Converter</h1>

    </>
  )
}

export default App
