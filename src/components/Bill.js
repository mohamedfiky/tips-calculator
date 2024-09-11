import React from 'react'

function Bill({bill, handleChange}) {
  
  return (
    <div className="bill">
        <span>How much was the bill?</span>
        <input type="text" value={bill} onChange={handleChange}></input>
    </div>
  )
}

export default Bill;