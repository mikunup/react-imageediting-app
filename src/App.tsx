import React from 'react';
import {ImageDropZone, ShowImage} from './Image';
import './App.css';
import './App.css';

const App: React.FC = () => {
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
