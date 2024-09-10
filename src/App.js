import React, {useState} from 'react';
import Bill from './components/Bill.js';
import Person_Tip from './components/Person-Tip.js';
import Result from './components/Result.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Bill />
      <Person_Tip text="How did you like the service?" />
      <Person_Tip text="How did your friend like the service?" />
      <Result />
    </div>
  );
}

export default App;
