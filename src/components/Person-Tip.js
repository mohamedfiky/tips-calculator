import React, {useState} from 'react'

function Person_Tip(props) {

  const [tip, setTip] = useState(0);

  function handleSelect(e){
    setTip(e.target.value);
  };

  return (
    <div className="person">
        <span>{props.text}</span>
        <select value={tip} onChange={handleSelect}>
            <option value={0}>Dissatisfied (0%)</option>
            <option value={5}>Satisfied (5%)</option>
            <option value={10}>Good service (10%)</option>
            <option value={20}>Excellent service (20%)</option>
        </select>
    </div>
  )
}

export default Person_Tip;