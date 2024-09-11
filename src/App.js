import React, {useState} from 'react';
import Bill from './components/Bill.js';
import Person_Tip from './components/Person-Tip.js';
import Result from './components/Result.js';
import './App.css';

function App() {

  const [billValue, setBillValue] = useState(0);
  function handleChange(e){
      setBillValue(e.target.value);
  }

  const [tip1, setTip1] = useState(0);
  function handleSelect1(e){
    setTip1(e.target.value);
  };

  const [tip2, setTip2] = useState(0);
  function handleSelect2(e){
    setTip2(e.target.value);
  };

  function reset(){
    setBillValue(0);
    setTip1(0);
    setTip2(0);
  };

  let averageTipPercentage = (Number(tip1) + Number(tip2)) / 2 ;

  let tipMoney = Number(billValue) * averageTipPercentage / 100;

  let total = Number(billValue) + tipMoney;

  return (
    <div className="App">
      <h1>Tip Calculator</h1>
      <Bill bill={billValue} handleChange={handleChange}/>
      <Person_Tip tip={tip1} handleSelect={handleSelect1} text="How did you like the service?" />
      <Person_Tip tip={tip2} handleSelect={handleSelect2} text="How did your friend like the service?" />
      {billValue > 0 ?
       <Result total={total} billValue={billValue} tipMoney={tipMoney} reset={reset} />
        : null}
    </div>
  );
}

export default App;
