import React from 'react';
import logo from './logo.svg';
import {ImageDropZone, ShowImage} from './Image';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageDropZone />
        <ShowImage />
      </header>
    </div>
  );
}

export default App;
