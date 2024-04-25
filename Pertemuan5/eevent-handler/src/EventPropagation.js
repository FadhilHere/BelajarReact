import React from "react";

export default function EventPropagation() {
  return (
    <div
      className="EventPropagation"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <button onClick={() => alert("Playing!")}>Play Movie</button>
      <button onClick={() => alert("Uploading!")}>Upload Image</button>
    </div>
  );
}
