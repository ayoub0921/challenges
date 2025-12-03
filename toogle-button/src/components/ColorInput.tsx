import React, { useState } from 'react';

const ColorInput = () => {
  const [color, setColor] = useState<string>("#000000");

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: color,
        minHeight: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        transition: "background-color 0.3s ease"
      }}
    >
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        style={{
          width: "60px",
          height: "40px",
          border: "none",
          cursor: "pointer"
        }}
      />
    </div>
  );
};

export default ColorInput;
