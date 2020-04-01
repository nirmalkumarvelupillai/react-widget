import React from 'react';
import './App.css';

function App(props) {
  const { status, color } = props.config || {};
  return (
    <div className="App">
      <h3>Chat Widget</h3>
      <p class="status" style={{color}}> testing status : {status} </p>
    </div>
  );
}

export default App;
