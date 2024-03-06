"use client"

import React, { useState } from 'react';
import Canvas from './Canvas';

const App = () => {
  const [currentColor, setCurrentColor] = useState('#000000');
  const [savedColors, setSavedColors] = useState([]);

  const handleColorChange = (event) => {
    setCurrentColor(event.target.value);
  };

  const saveCurrentColor = () => {
    if (!savedColors.includes(currentColor)) {
      setSavedColors([...savedColors, currentColor]);
    }
  };

  const selectSavedColor = (color) => {
    setCurrentColor(color);
  };

  return (
    <div className="App">
      <h1>My r/Place Clone</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div>
          <input type="color" value={currentColor} onChange={handleColorChange} />
          <button onClick={saveCurrentColor}>Save Color</button>
          <div style={{ marginTop: '10px' }}>
            {savedColors.map((color, index) => (
              <div
                key={index}
                onClick={() => selectSavedColor(color)}
                style={{
                  backgroundColor: color,
                  width: '25px',
                  height: '25px',
                  border: '1px solid #ddd',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        </div>
        <Canvas width={50} height={50} color={currentColor} />
      </div>
    </div>
  );
};

export default App;
