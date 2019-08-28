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
        <div className="buttons">
          <button className='previous' >{'<'} Previous</button>
          <button className='next' >Next {'>'}</button>
        </div>
      </div>
    </div>
  );
}

export default App;
