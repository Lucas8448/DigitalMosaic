"use client";

import React, { useState, useEffect } from 'react';
import { database } from './firebaseConfig';
import { ref, onValue, set } from 'firebase/database';

const Canvas = ({ width, height, color }) => {
  const [pixels, setPixels] = useState([]);
  const [lastDrawTime, setLastDrawTime] = useState(0)
  const COOLDOWN_PERIOD = 500;

  useEffect(() => {
    const canvasRef = ref(database, 'canvas');
    const unsubscribe = onValue(canvasRef, (snapshot) => {
      const data = snapshot.val();
      const pixelsData = data ? convertTo2DArray(data, width, height) : createEmptyGrid(width, height);
      setPixels(pixelsData);
    });
    return () => unsubscribe();
  }, [width, height]);


  const handleDraw = (x, y) => {
    const now = Date.now();
    if (now - lastDrawTime < COOLDOWN_PERIOD) {
      alert(`Please wait ${COOLDOWN_PERIOD / 1000} seconds between drawings.`);
      return;
    }

    setLastDrawTime(now);

    set(ref(database, `canvas/${y}/${x}`), color);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${width}, 25px)` }}>
      {pixels.map((row, y) =>
        row.map((color, x) => (
          <div
            key={`${x}-${y}`}
            onClick={() => handleDraw(x, y)}
            style={{
              width: '25px',
              height: '25px',
              backgroundColor: color || '#fff',
              border: '1px solid #ddd',
              cursor: 'crosshair',
              borderRadius: '8px',
            }}
          />
        ))
      )}
    </div>
  );
};

function convertTo2DArray(data, width, height) {
  let result = [];
  for (let y = 0; y < height; y++) {
    let row = [];
    for (let x = 0; x < width; x++) {
      row.push(data[y] && data[y][x] ? data[y][x] : '#fff');
    }
    result.push(row);
  }
  return result;
}

function createEmptyGrid(width, height) {
  return Array.from({ length: height }, () => Array.from({ length: width }, () => '#fff'));
}

export default Canvas;