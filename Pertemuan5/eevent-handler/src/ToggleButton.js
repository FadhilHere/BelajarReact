import React, { useState } from "react";

const ToggleButton = () => {
  // State untuk menyimpan status toggle
  const [isBlack, setIsBlack] = useState(false);

  // Fungsi untuk mengubah warna background saat tombol diklik
  const handleClick = () => {
    setIsBlack(!isBlack); // Toggle nilai isBlack
  };

  // Stil dinamis berdasarkan nilai isBlack
  const buttonStyle = {
    backgroundColor: isBlack ? "black" : "white",
    color: isBlack ? "white" : "black",
    padding: "10px 20px",
    border: "1px solid black",
    cursor: "pointer",
    outline: "none",
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {isBlack ? "Hitam" : "Putih"}
    </button>
  );
};

export default ToggleButton;
