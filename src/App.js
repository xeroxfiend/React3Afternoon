import React from 'react';
import './App.css';
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <header className='header'>
        <p className='home'>Home</p>
      </header>
      <div className="body">
        <Main />
        
      </div>
    </div>
  );
}

export default App;
