import React, { useState } from 'react';
import '../style.css';
import Header from '../components/Header'
export default function Percentage() {
  const [state, setState] = useState({
    operation: '',
    result: '',
  });
  const keypadClick = (e) => {
    let input = e.target.innerHTML;
    let _operation = state.operation + input;
    setState({ ...state, operation: _operation });
  };

  const calculate = () => {};

  const clear = () => {};

  const clearLastEntry = () => {};

  const showTransactions = () => {
    alert('feature coming soon...');
  };

  return (
    <>
      <Header title="Percentage" showTransactions={showTransactions} />

      
    </>
  );
}
