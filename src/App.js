
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import IncrementCounter from './IncrementCounter';
import DecrementCounter from './DecrementCounter';
import AddCounter from './AddCounter';
import SubtractCounter from './SubtractCounter';
import './App.css'

function App(props) {

  return (
    <div>
        <IncrementCounter />
        <DecrementCounter />
        <AddCounter />
        <SubtractCounter />
    </div>
  )
}

export default App;