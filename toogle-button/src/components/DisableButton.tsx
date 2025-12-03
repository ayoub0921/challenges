import React, { useState } from 'react';

const DisableButton = () => {
  const [name, setName] = useState<string>("");

  const isDisabled = name.trim().length === 0;

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
        style={{
          padding: "8px",
          marginRight: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px"
        }}
      />

      <button
        disabled={isDisabled}
        style={{
          padding: "8px 16px",
          cursor: isDisabled ? "not-allowed" : "pointer",
          backgroundColor: isDisabled ? "#ccc" : "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          transition: "0.3s",
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default DisableButton;
