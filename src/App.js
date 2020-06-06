import React from 'react';
import Hellow from './Hellow';
function App({name,age}) {
  return (
    <div>
      <h1>Hellow World From {name} By App.js</h1>
      <Hellow name={name} />
    </div>
  );
}

export default App;
