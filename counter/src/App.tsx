import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  const [number, setNumber] = useState<number>(0)

  const [storeValues, setStoreValues] = useState<number[]>([])


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(e.target.value))
  }


  const increment = () => {


    setCounter(prev => {
      const newValue = prev + number

      setStoreValues(prevStore => [...prevStore, newValue])

      return newValue
    })
  }

  const decrement = () => {
    setCounter(prev => {
      const newValue = prev - number

      setStoreValues(prevStore => [...prevStore, newValue])

      return newValue
    })
  }

  const double = () => {

    setCounter(prev => {
      const newValue = prev * 2

      setStoreValues(prevStore => [...prevStore, newValue])

      return newValue
    })
  }

  const halve = () => {

    setCounter(prev => {

      const newValue = prev / 2

      setStoreValues(prevStore => [...prevStore, newValue])

      return newValue
    })
  }

  const resete = () => {
    setCounter(() => {

      setStoreValues(prevStore => [...prevStore, 0])

      return 0
    })
  }


  return (
    <>

      {storeValues.map((value, index) => (
        <div key={index}>{value}</div>
      ))}



      <input type="number" value={number} onChange={handleChange} />

      <button onClick={increment}>+</button>
      <button onClick={decrement} disabled={counter === 0}>-</button>
      <button onClick={double}>Double</button>
      <button onClick={halve}>Halve</button>
      <button onClick={resete}>Reset</button>

    </>
  )
}

export default App
