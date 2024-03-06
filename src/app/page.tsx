"use client"

import React, { FormEvent, useState, ChangeEvent } from 'react';
import Canvas from './Canvas';

const App = () => {
  const [currentColor, setCurrentColor] = useState<string>('#000000');
  const [savedColors, setSavedColors] = useState<string[]>([]);

  const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentColor(event.target.value);
  };

  const saveCurrentColor = () => {
    if (!savedColors.includes(currentColor)) {
      setSavedColors([...savedColors, currentColor]);
    }
  };

  const selectSavedColor = (color: string) => {
    setCurrentColor(color);
  };

  return (
    <div className="App p-5">
      <div className="flex justify-start gap-5">
        <div>
          <div className="flex items-center gap-2">
            <input type="color" value={currentColor} onChange={handleColorChange} className="w-12 h-12 rounded-full border-none outline-none" />
            <button onClick={saveCurrentColor} className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 text-sm">Save Color</button>
          </div>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {savedColors.map((color, index) => (
              <div
                key={index}
                onClick={() => selectSavedColor(color)}
                className="w-8 h-8 border border-gray-300 cursor-pointer hover:border-blue-500"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center w-full">
          <Canvas width={50} height={50} color={currentColor} />
        </div>
      </div>
    </div>
  );
};

export default App;