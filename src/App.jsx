import './App.css'
import React, { useState } from 'react'


const App = () => {
  const [value, setValue] = useState(0);

  const onClickPlus = () => {
    setValue(value + 1);
  }

  const onClickMinus = () => {
    setValue(value - 1);
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Счетчик:</h2>
      <h1 className='counter'>{value}</h1>
      <div className="wrapper-button">
        <button onClick={onClickMinus} className="minus">-Minus</button>
        <button onClick={onClickPlus} className="plus">+Plus</button>
      </div>
    </>
  )
}

export default App;
