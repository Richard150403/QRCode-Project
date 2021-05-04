import React from 'react';
import './App.css';
import HelloWorld4 from './compnents/HelloWorld4';
import HelloWorld7 from './compnents/helloworld7/HelloWorld7';
import HelloWorld8 from './compnents/HelloWorld8';
import HelloWorld9 from './compnents/HelloWorld9';

const App: React.FC = () => {
  return (
    <div className="Container">
      <div className="Column1">
        <HelloWorld8 name="Pius" />
      </div>
      <div className="Column2">
        <HelloWorld4 />
      </div>
      <div className="Column3">
        <HelloWorld7 name="Peace" />
      </div>
      <div className="Column3">
        <HelloWorld9 />
      </div>
    </div>
  );
}

export default App;