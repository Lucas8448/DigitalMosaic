import React from 'react';
import Canvas from './Canvas';

const App = () => {
  return (
    <div className="App">
      <h1>My r/Place Clone</h1>
      <Canvas width={100} height={100} />
    </div>
  );
};

export default App;