import React, { Component } from 'react';
import './App.css';
import MyInput from './components/input/MyInput';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>This is the first project of the new year.</p>
         <div>
          <MyInput />
        </div>
      </header>
    </div>
  );
}

export default App;
