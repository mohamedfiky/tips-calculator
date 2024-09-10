import React, {useState} from 'react'

function Bill() {

    const[billValue, setBillValue] = useState(0);

    function handleChange(e){
        setBillValue(e.target.value);
    }

  return (
    <div className="bill">
        <span>How much was the bill?</span>
        <input type="text" value={billValue} onChange={handleChange}></input>
    </div>
  )
}

export default Bill;