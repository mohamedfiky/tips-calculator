import React from 'react'

function Result({total, billValue, tipMoney, reset}) {
  return (
    <div className="result">
        <p>You should pay ${total} (${billValue} bill + ${tipMoney} tip)</p>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Result;